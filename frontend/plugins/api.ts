import { $fetch, FetchOptions } from 'ofetch';
import StudentsModule from "@/repository/modules/students";
import EventsModule from "@/repository/modules/events";

// locals


interface IApiInstance {
    students: StudentsModule;
    events: EventsModule;
}

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    const fetchOptions: FetchOptions = {
        baseURL: "http://127.0.0.1:4001",
    };

    // Create a new instance of $fecther with custom option
    const apiFecther = $fetch.create(fetchOptions);

    // An object containing all repositories we need to expose
    const modules: IApiInstance = {
        students: new StudentsModule(apiFecther),
        events: new EventsModule(apiFecther)
    };

    return {
        provide: {
            api: modules
        }
    };
});