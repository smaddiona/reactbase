import React, { Fragment, useEffect, useState } from 'react'
import { useGlobalRefresh, useSelectedCollection } from '../../redux'
import CollectionService from '../../services/CollectionService'
import toast from 'react-hot-toast'
import CollectionDataTable from '../../components/tables/CollectionDataTable'


function Collections() {
  const [selectedCollection, setSelectedCollection] = useSelectedCollection()
  const [globalRefresh, setGlobalRefresh] = useGlobalRefresh()
  const [schema, setSchema] = useState<any>()
  const [infos, setInfos] = useState<any>()
  const [data, setData] = useState<any>([])
  const init = () => {
    CollectionService.getSchema(selectedCollection).then((res) => {
      setInfos(res)
      setSchema(res.schema)
    }).catch((err) => {
      toast.error(err.message)
    })


    CollectionService.getCollectionData(selectedCollection).then((res) => {
      setData(res)
    }).catch((err) => {
      toast.error(err.message)
    })
  }

  useEffect(() => {
    init()
  }, [selectedCollection])

  useEffect(() => {
    if (globalRefresh) {
      init()
      setGlobalRefresh(false)
    }
  }, [globalRefresh])


  return (
    <Fragment>
      {schema && infos && data ? (
        <CollectionDataTable schema={schema} infos={infos} data={data} />
      ) : "Loading..."}
    </Fragment>
  )
}

export default Collections