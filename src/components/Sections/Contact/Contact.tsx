import ContactForm from '@/components/ContactForm/ContactForm'
import ContactInfo from '@/components/ContactInfo/ContactInfo'

export default function Contact() {
  return (
    <section className="grid py-32 items-center grid-cols-1 md:grid-cols-2 gap-6">
      <div className="container max-w-lg">
        <ContactForm />
      </div>
      <ContactInfo />
    </section>
  )
}
