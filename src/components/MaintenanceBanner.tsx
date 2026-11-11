import { AlertTriangle, X } from 'lucide-react'
import { useState } from 'react'
import { maintenanceMessage } from '../lib/config'

export function MaintenanceBanner() {
  const [visible, setVisible] = useState(true)
  if (!maintenanceMessage || !visible) return null
  return <div className="maintenance-banner" role="status"><AlertTriangle size={17} /><span>{maintenanceMessage}</span><button type="button" onClick={() => setVisible(false)} aria-label="Fechar aviso"><X size={16} /></button></div>
}
