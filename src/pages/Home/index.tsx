import React, { useState } from "react";
import { Tree } from "../../components/Dashboard/TreeComp";
import treeData from "../../components/Dashboard/TreeComp/treeData.json"
import { TreeType } from "../../components/Dashboard/TreeComp/type";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { increment, decrement } from "../../features/counter/counterSlice";
import Todo from "../../features/todo/todo";
const Home = () => {


    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    const [data, setData] = useState<TreeType[]>(treeData)


    return (<><div>Recursive component

        <h1>
            {count}
        </h1>
        <button onClick={()=> dispatch(increment())}>++</button>
        <button onClick={()=> dispatch(decrement())}>--</button>
        <Tree data={data} />

    </div>
    <Todo/>
    
    </>
    
    )
}

export default Home;