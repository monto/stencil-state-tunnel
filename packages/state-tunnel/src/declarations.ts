export type PropList<T> = Extract<keyof T, string>[] | string;
export type SubscribeCallback<T> = (el: any, props: PropList<T>) => () => void;
export type ConsumerRenderer<T> = (subscribe: SubscribeCallback<T>, renderer: Function) => any;
