import {getUuid} from '@utils/id'
import OptionSelect from 'components/molecules/option_select'
import {useState} from 'react'
import {SelectOptionProps, SelectOptionValueType} from 'types/option'
import {DocumentType, isDocumentType} from 'types/value'

const SettingPage = () => {
  // state props
  const [documentType, setDocumentType] = useState<string>('competition')

  // handlers
  const handleDocumentTypeChange = (value: SelectOptionValueType) => {
    if (typeof value !== 'string') return
    if (!isDocumentType(value)) return

    setDocumentType(value)
  }

  // options props
  const documnetSelectOptions: SelectOptionProps = {
    id: getUuid(),
    title: 'Document Type',
    description: 'Select the type of document you want to generate',
    label: 'Document Type',
    value: String(documentType),
    onChange: handleDocumentTypeChange,
    options: [
      {
        value: 'competition',
        label: 'Competition',
      },
      {
        value: 'children',
        label: 'Training',
      },
    ],
  }

  return (
    <div>
      <h1>Setting Page</h1>
      <OptionSelect {...documnetSelectOptions} />
    </div>
  )
}

export default SettingPage
