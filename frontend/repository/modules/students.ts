import { FetchOptions } from 'ofetch';

import {IStudent} from "@/types/student";

// locals
import FetchFactory from '../factory';
import {AsyncDataOptions} from "nuxt/app";

class StudentsModule extends FetchFactory<IStudent[]> {
    private RESOURCE = '/students';
    async getStudents(
        asyncDataOptions?: AsyncDataOptions<IStudent[]>
    ) {

        return useAsyncData(
            () => {
                const fetchOptions: FetchOptions<'json'> = {
                    headers: {
                        'Accept-Language': 'en-US'
                    }
                };
                return this.call(
                    'GET',
                    `${this.RESOURCE}`,
                    undefined, // body
                    fetchOptions
                )
            },
            asyncDataOptions
        )
    }

    async getStudent(
        id: number,
        asyncDataOptions?: AsyncDataOptions<IStudent[]>
    ) {

        return useAsyncData(
            () => {
                const fetchOptions: FetchOptions<'json'> = {
                    headers: {

                    }
                };
                return this.call(
                    'GET',
                    `${this.RESOURCE}/${id}`,
                    undefined, // body
                    fetchOptions
                )
            },
            asyncDataOptions
        )
    }
}

export default StudentsModule;