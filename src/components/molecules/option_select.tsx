import {MenuItem, Select, SxProps} from '@mui/material'
import {getUuid} from '@utils/uuid'
import {SelectOptionProps} from 'types/option'

const OptionSelect = ({id, title, description, value, onChange, disabled, options}: SelectOptionProps) => {
  const selectStyle: SxProps = {
    minWidth: '10rem',
    marginLeft: '1rem',
  }

  return (
    <div className="flex" id={id} title={title}>
      <label className="flex flex-col" htmlFor={id + 'select'}>
        <h2 className="text-blue-500 text-lg">{title}</h2>
        <p>{description}</p>
      </label>
      <Select
        id={id + 'select'}
        size="small"
        onChange={onChange}
        sx={selectStyle}
        autoWidth
        defaultValue={options.length ? options[0].value.toString() : undefined}
      >
        {options.map(option => (
          <MenuItem key={getUuid()} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}

export default OptionSelect
