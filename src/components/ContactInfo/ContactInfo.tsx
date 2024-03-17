import { LocateIcon, MailIcon, PhoneIcon } from 'lucide-react'
import React from 'react'

export default function ContactInfo() {
  return (
    <div className="grid items-center gap-4">
      <div className="grid items-center gap-2">
        <LocateIcon
          className="w-6 h-6 opacity-50" />
        <span className="text-sm leading-none">SERAFIN OLAVE, 35 – BAJO - 31.007 PAMPLONA</span>
      </div>
      <div className="grid items-center gap-2">
        <PhoneIcon className="w-6 h-6 opacity-50" />
        <span className="text-sm leading-none">948 266 157</span>
      </div>
      <div className="grid items-center gap-2">
        <MailIcon className="w-6 h-6 opacity-50" />
        <span className="text-sm leading-none">cirima@cirima.es</span>
      </div>
    </div>
  )
}
