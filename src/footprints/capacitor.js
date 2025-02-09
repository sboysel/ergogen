module.exports = {
  params: {
    designator: 'C',
    value: 'C0603',
    side: 'B',
    from: { type: 'net', value: 'from' },
    to: { type: 'net', value: 'to' }
  },
  body: p => {
    return `
    (module Capacitor_0603 (layer F.Cu) (tedit 5F68FEEE)
      (descr "Capacitor SMD 0603 (1608 Metric), square (rectangular) end terminal, IPC_7351 nominal, (Body size source: IPC-SM-782 page 72, https://www.pcb-3d.com/wordpress/wp-content/uploads/ipc-sm-782a_amendment_1_and_2.pdf), generated with kicad-footprint-generator")
      (tags capacitor)
      (attr smd)
      ${ p.at }
      (fp_text reference ${ p.ref } (at 0 -1.43) (layer ${ p.side }.Fab)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value ${ p.value } (at 0 1.43) (layer ${ p.side }.Fab)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_line (start -0.8 0.4125) (end -0.8 -0.4125) (layer ${ p.side }.Fab) (width 0.1))
      (fp_line (start -0.8 -0.4125) (end 0.8 -0.4125) (layer ${ p.side }.Fab) (width 0.1))
      (fp_line (start 0.8 -0.4125) (end 0.8 0.4125) (layer ${ p.side }.Fab) (width 0.1))
      (fp_line (start 0.8 0.4125) (end -0.8 0.4125) (layer ${ p.side }.Fab) (width 0.1))
      (fp_line (start -0.237258 -0.5225) (end 0.237258 -0.5225) (layer ${ p.side }.SilkS) (width 0.12))
      (fp_line (start -0.237258 0.5225) (end 0.237258 0.5225) (layer ${ p.side }.SilkS) (width 0.12))
      (fp_line (start -1.48 0.73) (end -1.48 -0.73) (layer ${ p.side }.CrtYd) (width 0.05))
      (fp_line (start -1.48 -0.73) (end 1.48 -0.73) (layer ${ p.side }.CrtYd) (width 0.05))
      (fp_line (start 1.48 -0.73) (end 1.48 0.73) (layer ${ p.side }.CrtYd) (width 0.05))
      (fp_line (start 1.48 0.73) (end -1.48 0.73) (layer ${ p.side }.CrtYd) (width 0.05))
      (pad 1 smd roundrect (at -0.825 0) (size 0.8 0.95) (layers ${ p.side }.Cu ${ p.side }.Mask ${ p.side }.Paste) (roundrect_rratio 0.25) ${ p.from.str })
      (pad 2 smd roundrect (at 0.825 0) (size 0.8 0.95) (layers ${ p.side }.Cu ${ p.side }.Mask ${ p.side }.Paste) (roundrect_rratio 0.25) ${ p.to.str })
    )
    `
  }
}
