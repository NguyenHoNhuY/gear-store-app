"use client";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Controller, useForm } from "react-hook-form";
import { HiOutlineSearch } from "react-icons/hi";

type Props = {};

interface SearchFormValue {
    searchValue: string;
}

const Search = (props: Props) => {
    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset,
    } = useForm<SearchFormValue>({
        defaultValues: {
            searchValue: "",
        },
    });

    const getFormErrorMessage = (name: string) => {
        return errors.searchValue ? (
            <small className="p-error">{errors?.searchValue?.message}</small>
        ) : (
            <small className="p-error">&nbsp;</small>
        );
    };
    return (
        <form className="flex h-fit w-full">
            <Controller
                name="searchValue"
                control={control}
                render={({ field, fieldState }) => (
                    <>
                        <label
                            htmlFor={field.name}
                            className={classNames({
                                "p-error": errors?.searchValue,
                            })}
                        />
                        <span className="p-input-icon-right w-full">
                            <InputText
                                className="w-full rounded-md border-none py-[6px] pl-4 text-sm outline-none enabled:focus:!shadow-none"
                                placeholder="Nhập tên sản phẩm"
                                onChange={(e) => field.onChange(e.target.value)}
                            />
                            <div className="absolute right-0 top-1/2 flex h-full w-[15%] max-w-[100px] translate-y-[-50%] cursor-pointer items-center justify-center rounded-r-md bg-main-color md:w-[10%]">
                                <HiOutlineSearch className="h-5 w-5 text-white" />
                            </div>
                        </span>

                        {getFormErrorMessage(field.name)}
                    </>
                )}
            />
        </form>
    );
};

export default Search;
