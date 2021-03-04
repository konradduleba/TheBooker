export default interface IInfoAndEditData {
    info: {
        label: string;
        value: string;
    },
    form: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handleSubmit: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        error: any;
        name: string;
    }
}
