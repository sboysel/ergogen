
module.exports = {
  params: {
    designator: 'R',
    value: 'R0603',
    from: { type: 'net', value: 'from' },
    to: { type: 'net', value: 'to' }
  },
  body: p => {
    return `
    (module Resistor_0603 (layer F.Cu) (tedit 5F68FEEE)
      (descr "Resistor SMD 0603 (1608 Metric), square (rectangular) end terminal, IPC_7351 nominal, (Body size source: IPC-SM-782 page 72, https://www.pcb-3d.com/wordpress/wp-content/uploads/ipc-sm-782a_amendment_1_and_2.pdf), generated with kicad-footprint-generator")
      (tags resistor)
      (attr smd)
      ${ p.at }
      (fp_text reference ${ p.ref } (at 0 -1.43) (layer F.Fab)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value ${ p.value } (at 0 1.43) (layer F.Fab)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_line (start -0.8 0.4125) (end -0.8 -0.4125) (layer F.Fab) (width 0.1))
      (fp_line (start -0.8 -0.4125) (end 0.8 -0.4125) (layer F.Fab) (width 0.1))
      (fp_line (start 0.8 -0.4125) (end 0.8 0.4125) (layer F.Fab) (width 0.1))
      (fp_line (start 0.8 0.4125) (end -0.8 0.4125) (layer F.Fab) (width 0.1))
      (fp_line (start -0.237258 -0.5225) (end 0.237258 -0.5225) (layer F.SilkS) (width 0.12))
      (fp_line (start -0.237258 0.5225) (end 0.237258 0.5225) (layer F.SilkS) (width 0.12))
      (fp_line (start -1.48 0.73) (end -1.48 -0.73) (layer F.CrtYd) (width 0.05))
      (fp_line (start -1.48 -0.73) (end 1.48 -0.73) (layer F.CrtYd) (width 0.05))
      (fp_line (start 1.48 -0.73) (end 1.48 0.73) (layer F.CrtYd) (width 0.05))
      (fp_line (start 1.48 0.73) (end -1.48 0.73) (layer F.CrtYd) (width 0.05))
      (pad 1 smd roundrect (at -0.825 0) (size 0.8 0.95) (layers F.Cu F.Mask F.Paste) (roundrect_rratio 0.25) ${ p.from.str })
      (pad 2 smd roundrect (at 0.825 0) (size 0.8 0.95) (layers F.Cu F.Mask F.Paste) (roundrect_rratio 0.25) ${ p.to.str })
    )
    `
  }
}
