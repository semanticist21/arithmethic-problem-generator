import {SelectChangeEvent} from '@mui/material'
import {getUuid} from '@utils/uuid'
import OptionSelect from 'components/molecules/option_select'
import {useState} from 'react'
import {SelectOptionProps} from 'types/option'
import {DocumentType, isDocumentType} from 'types/value'

const SettingPage = () => {
  // state props
  const [documentType, setDocumentType] = useState<DocumentType>('competition')

  // handlers
  const handleDocumentTypeChange = (e: SelectChangeEvent) => {
    const value = e.target.value

    if (typeof value !== 'string') return
    if (!isDocumentType(value)) return

    setDocumentType(value as DocumentType)
  }

  // options props
  const documnetSelectOptions: SelectOptionProps = {
    id: getUuid(),
    title: '1. 문제집 종류',
    description: '문서의 형식을 선택합니다.',
    label: 'Document Type',
    value: String(documentType),
    onChange: handleDocumentTypeChange,
    options: [
      {
        value: 'competition',
        label: '대회',
      },
      {
        value: 'normal',
        label: '일반',
      },
      {
        value: 'children',
        label: '어린이',
      },
    ],
  }

  return (
    <div>
      <OptionSelect {...documnetSelectOptions} />
    </div>
  )
}

export default SettingPage
