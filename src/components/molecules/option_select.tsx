import {MenuItem, Select, SxProps} from '@mui/material'
import {SelectOptionProps} from 'types/option'

const OptionSelect = ({id, title, description, value, onChange, disabled, options}: SelectOptionProps) => {
  const selectStyle: SxProps = {
    minWidth: '10rem',
    marginLeft: '1rem',
  }

  return (
    <div className="flex" id={id} title={title}>
      <label className="flex flex-col" htmlFor={id}>
        <h2 className="text-blue-500 text-lg">{title}</h2>
        <p>{description}</p>
      </label>
      <Select id={id} size="small" onChange={onChange} sx={selectStyle} autoWidth>
        {options.map(option => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </div>
  )
}

export default OptionSelect
