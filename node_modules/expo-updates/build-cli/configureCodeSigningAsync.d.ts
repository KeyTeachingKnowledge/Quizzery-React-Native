declare type Options = {
    certificateInput: string;
    keyInput: string;
};
export declare function configureCodeSigningAsync(projectRoot: string, { certificateInput, keyInput }: Options): Promise<void>;
export {};
