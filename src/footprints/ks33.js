// https://github.com/siderakb/key-switches.pretty/blob/main/SW_Gateron_LowProfile_HotSwap_THT.kicad_mod

module.exports = {
  params: {
    from: undefined,
    to: undefined
  },
  body: p => {
    return `
    (module "SW_Gateron_LowProfile_HotSwap_THT" 
      (layer "F.Cu")
      (attr through_hole)

      ${p.at /* parametric position */}

      (pad "" np_thru_hole circle (at -4.4 4.7) (size 3 3) (drill 3) (layers "*.Mask") (tstamp e68fac9b-3de3-4acb-9bb0-3dee3685df22))
      (pad "" np_thru_hole circle (at 0 0) (size 5.25 5.25) (drill 5.25) (layers "*.Mask") (tstamp 4c069f0b-8c76-44a0-a999-7bd72a3e8dee))
      (pad "" np_thru_hole circle (at 2.6 5.75) (size 3 3) (drill 3) (layers "*.Mask") (tstamp 3f43b8cc-e232-4de4-a8bc-56a1a1c0a87a))
      (pad "1" smd roundrect (at -8.075 4.7) (size 2.5 2.55) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.2) (tstamp 9a025d13-3f10-4480-b02b-5650c6d28ed8) ${p.from.str})
      (pad "1" thru_hole circle (at -2.6 -5.75) (size 2.5 2.5) (drill 1.5) (layers "*.Cu" "B.Mask") (tstamp 7b58219a-a31d-4ba4-804a-77c6d706d8bc) ${p.from.str})
      (pad "2" thru_hole circle (at 4.4 -4.7) (size 2.5 2.5) (drill 1.5) (layers "*.Cu" "B.Mask") (tstamp 0de7d0e7-c8d5-482b-8e8a-d56acfc6ebd8) ${p.to.str})
      (pad "2" smd roundrect (at 6.275 5.75) (size 2.5 2.55) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.2) (tstamp a95b6208-cd25-486f-8a35-f7d7b1426174) ${p.to.str})
    )
    `
  }
}

