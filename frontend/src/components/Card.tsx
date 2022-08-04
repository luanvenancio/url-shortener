import Input from './Input';
import React from "react";

const Card = () => {

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-4 w-96 bg-white md:max-w-lg rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form>
                    <div className="space-y-3 mb-6">
                    <h5 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                        URL Shortener
                    </h5>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Create a shortened link making it easy to remember.
                    </p>
                    </div>
                    <Input />
                </form>
            </div>
        </div>
    );
};

export default Card;
