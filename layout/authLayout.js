import React, {useContext} from 'react';
import {useRouter} from "next/router";
import {useEffect} from "react";
import {Context} from "../pages/_app";
import {observer} from "mobx-react-lite";

const AuthLayout = ({children}) => {
    const router = useRouter()
    const {store} = useContext(Context);
    useEffect(() => {
        document.querySelector('body').classList.add('h-full')
    })
    useEffect(() => {
        document.querySelector('html').classList.add('h-full', 'bg-white')
    })
    useEffect(() => {
        document.querySelector('#__next').classList.add('h-full')
    })

    if (store.isLoading){
        return <>
            <h1>Загрузка...</h1>
        </>
    }

    if (store.isAuth){
        router.push('/')
    }



    return (
        <>
            <div className="min-h-full flex">
                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    {children}
                </div>
                <div className="hidden lg:block relative w-0 flex-1">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default observer(AuthLayout);
