import { useState } from "react";
import Select, { MultiValue, SingleValue } from "react-select";

import { useReactSelectStyle } from "../../../hooks";

type Option = SingleValue<SelectOption> | MultiValue<SelectOption>;

type Props = Omit<ISelectButton, "id"> & {
  /** Select dropdown option for search */
  isSearchable?: boolean;

  /** Select dropdown option for multi select */
  isMulti?: boolean;

  defaultOption?: SelectOption;

  placeholder?: string;

  onSelect: (option: SelectOption | SelectOption[], id?: string) => void;

  id?: string;

  width?: string;
};

/**
 *
 * Don't use this for forms. use FormInput type select instead.
 */
export default function SelectButton({
  placeholder,
  defaultOption,
  color,
  name,
  height,
  borderRadius,
  backgroundColor,
  borderColor,
  options,
  isSearchable = false,
  isMulti = false,
  onSelect,
  id,
  width
}: Props) {
  const [selectedOption, setSelectedOption] = useState<
    SelectOption | SelectOption[] | null
  >(defaultOption ?? null);

  const [selectedColor, setSelectedColor] = useState<
    Omit<SelectOption, "value" | "label">
  >({
    color: defaultOption ? defaultOption.color : color,
    background: defaultOption ? defaultOption.background : backgroundColor,
  });

  const { setSelectDropdownStyle } = useReactSelectStyle();

  /**
   * Change custom dropdown style dynamically
   */
  const customStyles = setSelectDropdownStyle({
    color: selectedColor.color!,
    height,
    borderRadius,
    backgroundColor: selectedColor.background!,
    borderColor: borderColor,
    width
  });

  const onChange = (option: Option) => {
    if (!option) throw new Error("No option selected");

    /**
     * Change background and text color of single select dropdown
     * Only if they are provided in options object
     *
     * The idea is to be able to change the dropdown select bg color and text color on select change
     * if implemented in design and dynamically!
     */

    if (!isMulti) {
      const selectOption = option as SelectOption;

      if (selectOption.background && selectOption.color) {
        setSelectedColor({
          color: selectOption.color,
          background: selectOption.background,
        });
      }
    }
    setSelectedOption(option as SelectOption | SelectOption[]);
    onSelect(option as SelectOption | SelectOption[], id);
  };

  return (
    <Select
      name={name}
      id={name}
      value={selectedOption as Option}
      onChange={onChange}
      options={options}
      components={{
        IndicatorSeparator: () => null,
      }}
      styles={customStyles}
      placeholder={placeholder}
      isSearchable={isSearchable}
      isMulti={isMulti}
    />
  );
}
