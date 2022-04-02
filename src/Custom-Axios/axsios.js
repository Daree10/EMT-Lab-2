import axios from "axios"
import React from "react"

const instance = axios.create({
    baseURL:"http://localhost:9091/api",
    headers: {
        'Access-Control-Allow-Origin':'*'
    }
})