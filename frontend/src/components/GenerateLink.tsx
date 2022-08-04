import toast, { Toaster } from "react-hot-toast";
import React from "react";

type GenerateLinkProps = {
    origin: string;
    short: string;
};

export function GenerateLink(props: GenerateLinkProps) {
    function copyLinkToClipboard() {
        navigator.clipboard.writeText(props.short);

        toast.success('Copied!');
    }

    return (
        <>
        <Toaster/>
            {typeof props.short === "undefined" || props.short === "" ? (
                <></>
            ) : (
                <div className="w-full">
                    <label
                        htmlFor="inputLink"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        New Link
                    </label>
                    <a className="flex items-center justify-around p-3 text-base font-medium text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <img
                            src={`${import.meta.env.VITE_GOOGLE_API}${
                                props.origin
                            }&sz=32`}
                        ></img>
                        <span className="w-fit whitespace-wrap">
                            {props.short}
                        </span>
                        <button
                            type="button"
                            onClick={copyLinkToClipboard}
                            data-collapse-toggle="toast-success"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                />
                            </svg>
                        </button>
                    </a>
                </div>
            )}
        </>
    );
}
