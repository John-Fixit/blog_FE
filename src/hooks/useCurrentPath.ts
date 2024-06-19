"use client";

import { useRouter } from "next/router";

const useCurrentPath=()=>{
    const router = useRouter();

    return router.pathname;
}

export  { useCurrentPath };