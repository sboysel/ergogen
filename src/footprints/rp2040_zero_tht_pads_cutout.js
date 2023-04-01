module.exports = {
  params: {
    _5V: {type: 'net', value: '5V'}
  },
  body: p => {
    const body = `
    (module "rp2040_zero_tht_pads_cutout" (version 20211014) 
      (layer "F.Cu")
      (tedit 61DD8C67)
      ${p.at}
      (attr through_hole exclude_from_pos_files)
      (fp_text reference "U?" (at -16.3989 -16.53268) (layer "F.SilkS") hide
        (effects (font (size 0.889 0.889) (thickness 0.1016)))
        (tstamp 1c479411-a194-4685-8eeb-e81966c16c7f)
      )
      (fp_text value "rp2040-zero-tht-pads-cutout" (at -16.8434 -5.54718) (layer "F.SilkS") hide
        (effects (font (size 0.6096 0.6096) (thickness 0.0762)))
        (tstamp d811e9ac-fc59-4c9b-8d93-83a5a9c048b6)
      )
      (fp_rect (start -9 -11.75) (end 9 11.75) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 180245d9-4a3f-4d1b-adcc-b4eafac722e0))
      (fp_line (start -6.096 7.436) (end -5.334 7.436) (layer "Edge.Cuts") (width 0.12) (tstamp 0e0a4b84-f32d-4d0d-bb01-e1a33da32acb))
      (fp_line (start -5.334 -5.518) (end -6.096 -5.518) (layer "Edge.Cuts") (width 0.12) (tstamp 1a657991-5c9c-41a4-9f2e-22f0c7450b3a))
      (fp_line (start -5.334 7.436) (end -5.334 -5.518) (layer "Edge.Cuts") (width 0.12) (tstamp 1c55eaff-dfb6-4adc-bdb2-1121eb73358d))
      (fp_line (start -6.096 9.25) (end -6.096 7.436) (layer "Edge.Cuts") (width 0.12) (tstamp 4445e598-1c38-4291-936b-eafc95d0cf78))
      (fp_line (start -6.096 9.25) (end 6 9.25) (layer "Edge.Cuts") (width 0.12) (tstamp 6d4529c3-e736-41f4-9e85-842fded7472a))
      (fp_line (start 6 9.25) (end 6 -11.75) (layer "Edge.Cuts") (width 0.12) (tstamp 96e87ac2-5565-47ab-ae62-263f85b93211))
      (fp_line (start -6.096 -5.518) (end -6.096 -11.75) (layer "Edge.Cuts") (width 0.12) (tstamp fe9073de-b4ae-429c-945b-a199d6313a17))
      (pad "1" thru_hole oval (at 7.62 -10.16 180) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp a67b97a6-51fd-4a32-8231-3fd10436b6ab))
      (pad "2" thru_hole oval (at 7.62 -7.62 180) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 68f7174d-ce7a-41b4-89f8-dd7e3ded57a1))
      (pad "3" thru_hole oval (at 7.62 -5.08 180) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp da7e6488-201f-4286-b86a-ca5aced3697a))
      (pad "4" thru_hole oval (at 7.62 -2.54 180) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 2b7c4f37-42c0-4571-a44b-b808484d3d74))
      (pad "5" thru_hole oval (at 7.62 0 180) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp abe3c03e-744a-4406-8e50-6a10745f0c43))
      (pad "6" thru_hole oval (at 7.62 2.54 180) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 771cb5c1-62ba-4cca-999e-cdcbe417213c))
      (pad "7" thru_hole oval (at 7.62 5.08 180) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 6a1ae8ee-dea6-4015-b83e-baf8fcdfaf0f))
      (pad "8" thru_hole oval (at 7.62 7.62 180) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 5a319d05-1a85-43fe-a179-ebcee7212a03))
      (pad "9" thru_hole oval (at 7.62 10.16 180) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 2e6b1f7e-e4c3-43a1-ae90-c85aa40696d5))
      (pad "10" thru_hole oval (at 5.08 10.16 90) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 04d60995-4f82-4f17-8f82-2f27a0a779cc))
      (pad "11" thru_hole oval (at 2.54 10.16 90) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 70abf340-8b3e-403e-a5e2-d8f35caa2f87))
      (pad "12" thru_hole oval (at 0 10.16 90) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 4f2f68c4-6fa0-45ce-b5c2-e911daddcd12))
      (pad "13" thru_hole oval (at -2.54 10.16 90) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 47993d80-a37e-426e-90c9-fd54b49ed166))
      (pad "14" thru_hole oval (at -5.08 10.16 90) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 0a4f1792-568b-402b-9700-fd4b01130ff8))
      (pad "15" thru_hole oval (at -7.62 10.16) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 867e444b-3681-4baf-9d08-1188c3544771))
      (pad "16" thru_hole oval (at -7.62 7.62) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 9c4384c0-9a57-4262-8711-eec9b8ecb4c6))
      (pad "17" thru_hole oval (at -7.62 5.08) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp a20b891b-a240-411f-9914-9ac989f03074))
      (pad "18" thru_hole oval (at -7.62 2.54) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 761a1a33-98a4-41af-9660-18c12d51b442))
      (pad "19" thru_hole oval (at -7.62 0) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 2caa1d4c-02f2-443a-a145-dc5854878c73))
      (pad "20" thru_hole oval (at -7.62 -2.54) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 1b7a2775-7631-4d4f-8b27-ab588adb3b7d))
      (pad "21" thru_hole oval (at -7.62 -5.08) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 75b890e6-df6d-4a6e-acaa-0870cda0d189))
      (pad "22" thru_hole oval (at -7.62 -7.62) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp e4d9ec61-16f7-410d-891d-89481964ef82))
      (pad "23" thru_hole oval (at -7.62 -10.16) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 8a11f86e-586e-495d-a11e-a1e650589934))
      (pad "24" thru_hole circle (at -6.096 6.674) (size 1 1) (drill 0.8) (layers *.Cu *.Mask) (tstamp a311f3c6-42e3-4584-9725-4a62ff91b6e3))
      (pad "25" thru_hole circle (at -6.096 5.404) (size 1 1) (drill 0.8) (layers *.Cu *.Mask) (tstamp 23345f3e-d08d-4834-b1dc-64de02569916))
      (pad "26" thru_hole circle (at -6.096 4.134) (size 1 1) (drill 0.8) (layers *.Cu *.Mask) (tstamp 53fda1fb-12bd-4536-80e1-aab5c0e3fc58))
      (pad "27" thru_hole circle (at -6.096 2.864) (size 1 1) (drill 0.8) (layers *.Cu *.Mask) (tstamp 0cc094e7-c1c0-457d-bd94-3db91c23be55))
      (pad "28" thru_hole circle (at -6.096 1.594) (size 1 1) (drill 0.8) (layers *.Cu *.Mask) (tstamp eb7e294c-b398-413b-8b78-85a66ed5f3ea))
      (pad "29" thru_hole circle (at -6.096 0.324) (size 1 1) (drill 0.8) (layers *.Cu *.Mask) (tstamp df93f76b-86da-45ae-87e2-4b691af12b00))
      (pad "30" thru_hole circle (at -6.096 -0.946) (size 1 1) (drill 0.8) (layers *.Cu *.Mask) (tstamp 9bb406d9-c650-4e67-9a26-3195d4de542e))
      (pad "31" thru_hole circle (at -6.096 -2.216) (size 1 1) (drill 0.8) (layers *.Cu *.Mask) (tstamp 81b95d0d-8967-4ed1-8d40-39925d015ae8))
      (pad "32" thru_hole circle (at -6.096 -3.486) (size 1 1) (drill 0.8) (layers *.Cu *.Mask) (tstamp b66731e7-61d5-4447-bf6a-e91a62b82298))
      (pad "33" thru_hole circle (at -6.096 -4.756) (size 1 1) (drill 0.8) (layers *.Cu *.Mask) (tstamp ae0e6b31-27d7-4383-a4fc-7557b0a19382))
    )
    `
    return body
  }
}
