import Image from 'next/image'
import certificadoER from '@/../public/certificado-er-cirima.jpg'
import certificadoIqnet from '@/../public/certificado-iqnet.jpg'
import ebara from '@/../public/ebara-logo.jpg'
import arc from '@/../public/logo-arc.jpg'
import { WrenchIcon } from '@/components/Icons/Icons'

export default function Certificates() {
  return (
    <section className="grid items-center gap-6">
      <div className="container grid items-center gap-6 text-center md:text-left">
        <div className="grid items-center gap-2">
          <WrenchIcon className="w-8 h-8 flex-shrink-0" />
          <h2 className="text-3xl font-bold tracking-tight">Certificados y distribuidores</h2>
        </div>
      </div>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center gap-6">

          <a href={"@/../public/CertificadoER-1453-2005_ES_2020-07-03.pdf"} download={"Certificado ER"}>
            <Image
              className="rounded-lg h-64 w-64"
              alt="certificadoER"
              style={{
                objectFit: "cover",
              }}
              src={certificadoER} />

          </a>
          <a href={"@/../public/CertificadoER-1453-2005_ES_2020-07-03.pdf"} download={"Certificado ER"}>
            <Image
              className="rounded-lg h-64 w-64"
              alt="certificadoER"
              style={{
                objectFit: "cover",
              }}
              src={certificadoIqnet} />

          </a>
          <Image
            className="rounded-lg h-64"
            alt="certificadoER"
            style={{
              // objectFit: "cover",
            }}
            src={ebara} />

          <Image
            className="rounded-lg h-64 w-64"
            style={{
              // objectFit: "cover",
            }}
            alt="certificadoER"
            src={arc} />

        </div>
      </div>
    </section>
  )
}
