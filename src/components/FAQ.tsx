import { Plus } from 'lucide-react'
import type { FAQItem } from '../types'

export function FAQ({ items }: { items: FAQItem[] }) {
  return <div className="faq-list">{items.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}<Plus size={20} /></summary><p>{item.answer}</p></details>)}</div>
}
