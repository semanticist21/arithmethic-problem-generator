import {MenuItem, Select} from '@mui/material'
import {SelectOptionProps} from 'types/option'

const OptionSelect = ({id, title, description, value, setValue, disabled, options}: SelectOptionProps) => {
  return (
    <div id={id} title={title}>
      <label htmlFor={id}>
        <h2>{title}</h2>
        <p>{description}</p>
      </label>
      <Select id={id}>
        {options.map(option => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </div>
  )
}

export default OptionSelect
