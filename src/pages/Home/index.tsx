import React, { useState } from "react";
import { Tree } from "../../components/Dashboard/TreeComp";
import treeData from "../../components/Dashboard/TreeComp/treeData.json"
import { TreeType } from "../../components/Dashboard/TreeComp/type";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { increment, decrement } from "../../features/counter/counterSlice";
const Home = () => {


    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    const [data, setData] = useState<TreeType[]>(treeData)
    const arr: number[] = [1, 32, 4, 3, 2, 43, 3, 2, 3, 4, 3, 2, 23, 3, 2, 3, 12, 21, 21, 1, 1, 2, 34, 23, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 123, 23, 232]
    const render = arr.map((item: number, index: number) => {
        return (
            <div key={index}>{item}</div>
        )
    })


    return (<div>Recursive component

        <h1>
            {count}
        </h1>
        <button onClick={()=> dispatch(increment())}>++</button>
        <button onClick={()=> dispatch(decrement())}>--</button>
        <Tree data={data} />

    </div>)
}

export default Home;