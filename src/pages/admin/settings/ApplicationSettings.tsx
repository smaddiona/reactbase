import React, { Fragment, useEffect, useState } from "react";
import PageTitle from "../../../components/typography/PageTitle";
import TextInput from "../../../components/inputs/TextInput";
import NumberInput from "../../../components/inputs/NumberInput";
import { Switch } from "@headlessui/react";
import SettingsService from "../../../services/SettingsService";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import toast from "react-hot-toast";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function ApplicationSettings() {
  const [appname, setAppname] = useState<string>("");
  const [appurl, setAppurl] = useState<string>("");
  const [logRetention, setLogRetention] = useState<number>(5);
  const [hideControls, setHideControls] = useState<boolean>(false);
  const [settings, setSettings] = useState<any>();
  const [modified, setModified] = useState<boolean>(false);

  useEffect(() => {
    SettingsService.getSettings().then((res) => {
      setSettings(res);
      setAppname(res.meta.appName);
      setAppurl(res.meta.appUrl);
      setLogRetention(res.logs.maxDays);
      setHideControls(res.meta.hideControls);
    });
  }, []);

  useEffect(() => {
    if (settings) {
      if (
        settings.meta.appName !== appname ||
        settings.meta.appUrl !== appurl ||
        settings.logs.maxDays !== logRetention ||
        settings.meta.hideControls !== hideControls
      ) {
        setModified(true);
      } else {
        setModified(false);
      }
    }
  }, [appname, appurl, logRetention, hideControls]);

  const handleUpdate = () => {
    SettingsService.updateSettings({
      meta: {
        appName: appname,
        appUrl: appurl,
        hideControls: hideControls,
      },
      logs: {
        maxDays: logRetention,
      },
    })
      .then((res) => {
        setSettings(res);
        setAppname(res.meta.appName);
        setAppurl(res.meta.appUrl);
        setLogRetention(res.logs.maxDays);
        setHideControls(res.meta.hideControls);
        setModified(false);
        toast.success("Settings updated successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Fragment>
      <PageTitle parent="Settings" name="Application" />
      <div className="max-w-3xl mx-auto p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput
          id="appname"
          name="appname"
          placeholder="Application name"
          label="Application Name"
          value={appname}
          onChange={setAppname}
        />
        <TextInput
          id="appurl"
          name="appurl"
          placeholder="Application URL"
          label="Application URL"
          value={appurl}
          onChange={setAppurl}
        />
        <div className="col-span-2">
          <NumberInput
            id="retention"
            name="retention"
            placeholder="Log retention days"
            label="Log max days retention"
            value={logRetention}
            onChange={setLogRetention}
          />
        </div>
        <div className="col-span-2 mt-2 inline-flex items-center">
          <Switch
            checked={hideControls}
            onChange={setHideControls}
            className={classNames(
              hideControls ? "bg-green-500" : "bg-gray-200 dark:bg-zinc-700",
              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                hideControls ? "translate-x-5" : "translate-x-0",
                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
          <p className="text-black dark:text-white text-sm ml-2">
            Hide collection create and edit controls
          </p>
        </div>
        <div className="col-span-2 flex flex-row justify-end">
          <PrimaryButton
            onClick={() => {
              handleUpdate();
            }}
            label="Save"
            short={true}
            disabled={!modified}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default ApplicationSettings;
