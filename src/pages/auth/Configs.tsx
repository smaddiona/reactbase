import React, { useEffect, useState } from 'react'
import TextInput from '../../components/inputs/TextInput'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import ConfigUtil from '../../utils/ConfigUtil'
import InstallService from '../../services/InstallService'
import { CheckCircleIcon } from '@heroicons/react/20/solid'


function Configs() {
    const [url, setUrl] = useState('http://localhost:8090')
    const [errored, setErrored] = useState({status: false, message: ''})
    const [loading, setLoading] = useState(false)

    const handleSave = () => {
        if(url === '') {
            setErrored({status: true, message: 'Fill all the necessary infos'})
            return
        }

        setLoading(true)
        InstallService.testUrl(url).then((res) => {
            ConfigUtil.setUrl(url);
            window.location.reload();
        }).catch((err) => {
            setErrored({status: true, message: 'Invalid URL'})
        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        setErrored({status: false, message: ''})
    }, [url])


  return (
    <div className="w-full h-[100dvh] flex flex-col justify-center items-center">
      <div className="max-w-xl w-full flex flex-col justify-center items-center rounded-xl p-4 bg-zinc-100 dark:bg-zinc-900 border-zinc-500">
        <h1 className="font-bold tracking-tight leading-6 text-black dark:text-white text-3xl">Configs</h1>
        {errored.status && <p className="text-red-500 mt-2">{errored.message}</p>}
        <TextInput id="pb_url" name="pb_url" placeholder="https://pb.example.com" label="URL" value={url} onChange={(value) => setUrl(value)} />
        <div className='mt-2 w-full flex flex-row justify-end items-center'>
            <PrimaryButton short={true} isLoading={loading} label="Save" onClick={() => {handleSave()}} IconComponent={CheckCircleIcon} iconPosition='end' />
        </div>
      </div>
    </div>
  )
}

export default Configs