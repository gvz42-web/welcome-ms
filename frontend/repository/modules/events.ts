import { FetchOptions } from 'ofetch';

import {IEvent} from "@/types/event";

// locals
import FetchFactory from '../factory';
import {AsyncDataOptions} from "nuxt/app";

class EventsModule extends FetchFactory<IEvent[]> {
    private RESOURCE = '/events';
    async getAllEvents(
        asyncDataOptions?: AsyncDataOptions<IEvent[]>
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
}

export default EventsModule;