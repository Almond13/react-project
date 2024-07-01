import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import {getPost} from "../api/getApi"
import {useDispatch, useSelector} from "react-redux"
import {detailActions, fetchListData} from "../redux/modules/detail"

const List = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const listData = useSelector((state) => state.detail.listData)
    const listHeader = useSelector((state) => state.detail.listHeader)
    const loading = useSelector((state) => state.detail.loading)

    useEffect(() => {
        dispatch(fetchListData())
    }, [dispatch])

    if (loading) {
        return <p>대기중</p>
    }

    if (listData.length === 0) {
        return null
    }

    return (
        <>
            <h1>어바웃</h1>
            <p>첫 번째 데이터의 ID: {listData[0].id}</p>
            <pre>{JSON.stringify(listHeader, null, 2)}</pre>
        </>
    )
}

export default List
