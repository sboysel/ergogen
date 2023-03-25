module.exports = {
  params: {
    orientation: 'up',
    GP0: {type: 'net', value: 'GP0'},
    GP1: {type: 'net', value: 'GP1'},
    GND: {type: 'net', value: 'GND'},
    GP2: {type: 'net', value: 'GP2'},
    GP3: {type: 'net', value: 'GP3'},
    GP4: {type: 'net', value: 'GP4'},
    GP5: {type: 'net', value: 'GP5'},
    GND: {type: 'net', value: 'GND'},
    GP6: {type: 'net', value: 'GP6'},
    GP7: {type: 'net', value: 'GP7'},
    GP8: {type: 'net', value: 'GP8'},
    GP9: {type: 'net', value: 'GP9'},
    GND: {type: 'net', value: 'GND'},
    GP10: {type: 'net', value: 'GP10'},
    GP11: {type: 'net', value: 'GP11'},
    GP12: {type: 'net', value: 'GP12'},
    GP13: {type: 'net', value: 'GP13'},
    GND: {type: 'net', value: 'GND'},
    GP14: {type: 'net', value: 'GP14'},
    GP15: {type: 'net', value: 'GP15'},
    GP16: {type: 'net', value: 'GP16'},
    GP17: {type: 'net', value: 'GP17'},
    GND: {type: 'net', value: 'GND'},
    GP18: {type: 'net', value: 'GP18'},
    GP19: {type: 'net', value: 'GP19'},
    GP20: {type: 'net', value: 'GP20'},
    GP21: {type: 'net', value: 'GP21'},
    GND: {type: 'net', value: 'GND'},
    GP22: {type: 'net', value: 'GP22'},
    RUN: {type: 'net', value: 'RUN'},
    GP26: {type: 'net', value: 'GP26'},
    GP27: {type: 'net', value: 'GP27'},
    AGND: {type: 'net', value: 'AGND'},
    GP28: {type: 'net', value: 'GP28'},
    ADC_VREF: {type: 'net', value: 'ADC_VREF'},
    _3V3: {type: 'net', value: '3V3'},
    _3V3_EN: {type: 'net', value: '3V3_EN'},
    GND: {type: 'net', value: 'GND'},
    VSYS: {type: 'net', value: 'VSYS'},
    VBUS: {type: 'net', value: 'VBUS'}
  },
  body: p => {
    // pins run counter-clockwise from
    if(p.orientation == 'up') {
      return `
      (module RPi_Pico_TH_oval_face_up 
        (layer F.Cu)
        (attr through_hole)
        ${p.at}
        (fp_text reference U0 (at 0 0) (layer F.Fab) hide
          (effects (font (size 1 1) (thickness 0.15)))
          (tstamp db43bf1b-fd5c-4a08-b779-663eec4fe496)
        )
        (fp_text value Pico (at 0 2.159) (layer F.Fab)
          (effects (font (size 1 1) (thickness 0.15)))
          (tstamp 957d80db-26db-4e86-a9dc-29ad4ca5095b)
        )
        (fp_line (start -10.5 25.5) (end 10.5 25.5) (layer F.SilkS) (width 0.12) (tstamp 0ee7d488-c8e1-4c44-86f9-cb3179c1dcc3))
        (fp_line (start -10.5 -25.5) (end -10.5 25.5) (layer F.SilkS) (width 0.12) (tstamp 534bc5c9-f3fb-4616-80c7-bc456d144644))
        (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (layer F.SilkS) (width 0.12) (tstamp 68482ec9-0f6b-4f20-939f-192de417ebc3))
        (fp_line (start 10.5 -25.5) (end 10.5 25.5) (layer F.SilkS) (width 0.12) (tstamp 81447e22-84f7-41be-abbd-faa8158a1a92))
        (fp_circle (center -11.43 -24.13) (end -10.795 -24.13) (layer F.SilkS) (width 0) (fill solid) (tstamp 6850ce9f-d644-475c-8473-9f77a98004b5))
        (fp_line (start 11 -26) (end -11 -26) (layer F.CrtYd) (width 0.12) (tstamp 2f9ae238-1fb9-4e15-8fa1-677f80c040a6))
        (fp_line (start -11 -26) (end -11 26) (layer F.CrtYd) (width 0.12) (tstamp 699ff8d4-2c0e-4217-95dd-298b70b89404))
        (fp_line (start -11 26) (end 11 26) (layer F.CrtYd) (width 0.12) (tstamp 72b8bd2c-7322-4211-94c6-b8b57c1ae45f))
        (fp_line (start 11 26) (end 11 -26) (layer F.CrtYd) (width 0.12) (tstamp 81d02e3f-8a4a-4f4a-8c87-a49e720a351f))
        (fp_line (start -10.5 -25.5) (end -10.5 25.5) (layer F.Fab) (width 0.12) (tstamp 2b9714fd-9cdd-4b0a-940e-6a9561081b60))
        (fp_line (start 10.5 25.5) (end 10.5 -25.5) (layer F.Fab) (width 0.12) (tstamp 66e308bb-0f20-48b1-96bd-7e938eb86aff))
        (fp_line (start 10.5 -24.2) (end 9.2 -25.5) (layer F.Fab) (width 0.12) (tstamp 80bc0467-dc46-4791-9307-44241d7966d4))
        (fp_line (start 10.5 -25.5) (end -10.5 -25.5) (layer F.Fab) (width 0.12) (tstamp d2cf8733-14a9-4c23-b276-1bc10c1a5f51))
        (fp_line (start -10.5 25.5) (end 10.5 25.5) (layer F.Fab) (width 0.12) (tstamp e840b107-3750-438e-b78f-29c9d0d23fc4))
        (pad 1 thru_hole oval (at -8.82 -24.13) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 261789c0-418e-4ec0-8cdf-89abe1f96c5d) ${p.GP0.str})
        (pad 2 thru_hole oval (at -8.82 -21.59) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 82df91bd-b1f7-4cb5-a4b8-f014077ed225) ${p.GP1.str})
        (pad 3 thru_hole rect (at -8.82 -19.05) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp e2d28f85-8433-4782-86c1-698d98ca355b) ${p.GND.str})
        (pad 4 thru_hole oval (at -8.82 -16.51) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 6c215906-b1c0-41e7-a1ee-f64340a0df1f) ${p.GP2.str})
        (pad 5 thru_hole oval (at -8.82 -13.97) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 76c55b2f-8f9b-48f6-a612-6fe3631d36eb) ${p.GP3.str})
        (pad 6 thru_hole oval (at -8.82 -11.43) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 210013bf-6406-44cc-a685-766765aa871b) ${p.GP4.str})
        (pad 7 thru_hole oval (at -8.82 -8.89) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 2a1ac614-5190-4c1d-94c5-f92822392dbd) ${p.GP5.str})
        (pad 8 thru_hole rect (at -8.82 -6.35) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 3aca05ca-5eaa-49fe-b403-9e2bce888982) ${p.GND.str})
        (pad 9 thru_hole oval (at -8.82 -3.81) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp fc3ee03b-64c4-4765-a4db-f9ccddc815c0) ${p.GP6.str})
        (pad 10 thru_hole oval (at -8.82 -1.27) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 1cbf2788-2f4d-4a14-987b-1ca92d4e80a5) ${p.GP7.str})
        (pad 11 thru_hole oval (at -8.82 1.27) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp b8d2415c-f56e-4a89-978d-a2919d2209f5) ${p.GP8.str})
        (pad 12 thru_hole oval (at -8.82 3.81) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 721079ce-6e9b-4142-b40e-724402815846) ${p.GP9.str})
        (pad 13 thru_hole rect (at -8.82 6.35) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 156789ac-0299-4e4b-9bdc-aae415420eec) ${p.GND.str})
        (pad 14 thru_hole oval (at -8.82 8.89) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp fda6fba3-26de-4533-ab37-f87bb8ca8965) ${p.GP10.str})
        (pad 15 thru_hole oval (at -8.82 11.43) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp db248dbe-bef4-43e0-991f-f8907ae081d4) ${p.GP11.str})
        (pad 16 thru_hole oval (at -8.82 13.97) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 8b5154dc-4718-4a03-ad67-ed035a4319ce) ${p.GP12.str})
        (pad 17 thru_hole oval (at -8.82 16.51) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp eb64b7d2-d623-452c-9703-2bb0265ee337) ${p.GP13.str})
        (pad 18 thru_hole rect (at -8.82 19.05) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp f7386878-6bd2-49fb-be47-6588e913174b) ${p.GND.str})
        (pad 19 thru_hole oval (at -8.82 21.59) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp fa8076fb-ecc2-4918-a4f3-511178e9ad37) ${p.GP14.str})
        (pad 20 thru_hole oval (at -8.82 24.13) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 4b6b7c47-5e11-4065-b26e-9c14c9c8ee50) ${p.GP15.str})
        (pad 21 thru_hole oval (at 8.82 24.13) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 7a45c78c-faae-432b-8399-806250e23db7) ${p.GP16.str})
        (pad 22 thru_hole oval (at 8.82 21.59) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 852f4f24-f0ec-4812-8953-10a1c9ba8b18) ${p.GP17.str})
        (pad 23 thru_hole rect (at 8.82 19.05) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 6fbe5d8d-e43a-4207-a531-c4dfe41759ce) ${p.GND.str})
        (pad 24 thru_hole oval (at 8.82 16.51) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 48f29450-601c-4f43-bede-558f16a2580a) ${p.GP18.str})
        (pad 25 thru_hole oval (at 8.82 13.97) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 0cf035fe-7441-41a9-8ecd-8633f9511a86) ${p.GP19.str})
        (pad 26 thru_hole oval (at 8.82 11.43) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 4aa34793-001c-422a-9a9e-f2fa24b7c918) ${p.GP20.str})
        (pad 27 thru_hole oval (at 8.82 8.89) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 07bfbc8a-823e-44b5-ab95-5c0659fd56bb) ${p.GP21.str})
        (pad 28 thru_hole rect (at 8.82 6.35) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 6fd23c62-f256-47b1-9fb2-80a0473029fb) ${p.GND.str})
        (pad 29 thru_hole oval (at 8.82 3.81) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 0e54c542-e3a2-4db6-883d-37a3ad94739d) ${p.GP22.str})
        (pad 30 thru_hole oval (at 8.82 1.27) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 49dcd950-fbab-4ac5-9a36-86d2c2a0259e) ${p.RUN.str})
        (pad 31 thru_hole oval (at 8.82 -1.27) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 84cce8d0-f83b-4f08-af4b-1d62af837a54) ${p.GP26.str})
        (pad 32 thru_hole oval (at 8.82 -3.81) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp da79c04c-a207-48dc-a5d7-8a078322a160) ${p.GP27.str})
        (pad 33 thru_hole rect (at 8.82 -6.35) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 9db6e273-f7b0-4ab9-9b75-cb2195ede133) ${p.AGND.str})
        (pad 34 thru_hole oval (at 8.82 -8.89) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 36be125c-d820-40b1-81f5-37cb6c4c1027) ${p.GP28.str})
        (pad 35 thru_hole oval (at 8.82 -11.43) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 510cc5c4-e61c-4e17-93d1-bd10b62ad6fb) ${p.ADC_VREF.str})
        (pad 36 thru_hole oval (at 8.82 -13.97) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 33256a6e-b053-471b-ac8e-081487946d0e) ${p._3V3.str})
        (pad 37 thru_hole oval (at 8.82 -16.51) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp ac928fb2-0ce9-4e34-8e2d-402b47a0d641) ${p._3V3_EN.str})
        (pad 38 thru_hole rect (at 8.82 -19.05) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp cb792c93-111c-4188-a8ba-8930e71f97d8) ${p.GND.str})
        (pad 39 thru_hole oval (at 8.82 -21.59) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp b8260a4c-72c5-48e1-9736-d2140182d3fc) ${p.VSYS.str})
        (pad 40 thru_hole oval (at 8.82 -24.13) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 1a60f562-a956-4d54-a00f-6201c5b12308) ${p.VBUS.str})
      )
      `
    } else if(p.orientation == 'down') {
    return `
    (module "RPi_Pico_TH_oval_face_down"
    (layer "F.Cu")
    (attr through_hole)
    (fp_text reference "U0" (at 0 0) (layer "F.Fab") hide
      (effects (font (size 1 1) (thickness 0.15)))
      (tstamp db43bf1b-fd5c-4a08-b779-663eec4fe496)
    )
    (fp_text value "Pico" (at 0 2.159) (layer "F.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
      (tstamp 957d80db-26db-4e86-a9dc-29ad4ca5095b)
    )
    (fp_text user "GP19" (at -11.43 13.335 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 0512cf0d-bf03-4f77-8a6a-c3c067802cf0)
    )
    (fp_text user "GP27" (at -11.43 -4.445 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 05a8de54-ae76-40c7-a32a-0df7a4d563d2)
    )
    (fp_text user "GP1" (at 11.43 -20.965 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 0b801e05-2e0a-4351-85c5-ec4a1d9b9fad)
    )
    (fp_text user "GP12" (at 11.43 14.605 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 0bd23f7d-3ca1-42f0-9a3d-95ab3fd6f1e6)
    )
    (fp_text user "GP9" (at 11.43 4.445 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 136c183c-b28d-4915-9b5e-d3fbba117f5d)
    )
    (fp_text user "GP15" (at 11.43 24.765 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 1ca49d57-c61e-4e6f-b2b4-6469a5bf07fd)
    )
    (fp_text user "AGND" (at -11.43 -6.985 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 1cd27a2f-710a-404b-b237-1824446b721d)
    )
    (fp_text user "ADC_VREF" (at -11.43 -12.065 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 1f6c33fd-53d6-4b46-8c44-6e86103c343b)
    )
    (fp_text user "GP22" (at -11.43 3.175 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 28bc7544-de38-440b-bcb9-9c5464212a88)
    )
    (fp_text user "VBUS" (at -11.43 -24.765 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 2b4c337c-e381-425c-a127-71eef88ed016)
    )
    (fp_text user "GP6" (at 11.43 -3.175 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 2f817fcf-0536-4fec-b4a4-0b995265cae3)
    )
    (fp_text user "GP28" (at -11.43 -9.525 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 3e68e217-93bc-4a8f-b53b-b4ce7571bba3)
    )
    (fp_text user "GND" (at 11.43 -5.715 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 3ee5e203-0a5e-4ba6-b209-3de0a6dc94f1)
    )
    (fp_text user "GND" (at 11.43 6.985 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 486edd86-fcbc-4903-9a5a-a56a63dd1f1a)
    )
    (fp_text user "GP11" (at 11.43 12.065 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 55ac62f1-4c43-4ca0-98ee-1f9a2235b670)
    )
    (fp_text user "GP2" (at 11.43 -15.875 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 5e7824a9-0072-4fb4-a97e-86401588ad3a)
    )
    (fp_text user "GND" (at 11.43 -18.415 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 617a295b-33e8-4933-aea0-2422d1059ab0)
    )
    (fp_text user "GP18" (at -11.43 15.875 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 6b317f00-b4e3-4395-a2e9-d4cc2399e67d)
    )
    (fp_text user "GP5" (at 11.43 -8.255 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 6d2304ff-7a57-4d14-a62e-731c4a6eaab1)
    )
    (fp_text user "GND" (at -11.43 5.715 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 6d3f8560-f792-46f2-8d92-a99a59b2b7ec)
    )
    (fp_text user "GND" (at -11.43 -19.685 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 734ffb13-1205-478b-85b2-a083728372bf)
    )
    (fp_text user "GP7" (at 11.43 -0.635 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 7c9ba3d6-95c3-4c2c-9ead-6739b490045e)
    )
    (fp_text user "3V3" (at -11.43 -14.605 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 7f091456-4b73-4380-b574-778d43125dd0)
    )
    (fp_text user "GP21" (at -11.43 8.255 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 808a9ecb-2b94-4ebe-9579-7c8e28d7c5cb)
    )
    (fp_text user "GP10" (at 11.43 9.525 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 8860f633-76e6-48a4-acbe-09aac3a44bcf)
    )
    (fp_text user "GP20" (at -11.43 10.795 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 892fffcc-863d-457e-9517-0e1fc19a968b)
    )
    (fp_text user "GP14" (at 11.43 22.225 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 8ede2f8b-7c13-4dd0-848b-6cc5bb6bce91)
    )
    (fp_text user "GP26" (at -11.43 -1.905 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 93f2d0f4-f915-4870-9631-0a126f1c8722)
    )
    (fp_text user "GND" (at 11.43 19.685 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp 98901507-a30f-46c5-82a1-b63397592c35)
    )
    (fp_text user "GND" (at -11.48 18.415 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp 9906893d-5ce6-41be-b28d-674dda74fcf2)
    )
    (fp_text user "GP3" (at 11.43 -13.335 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp a2a1bf4c-34eb-4313-bdff-023937f75c46)
    )
    (fp_text user "RUN" (at -11.43 0.635 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp bd0acae4-a9b4-47df-b2ac-e56f0915c546)
    )
    (fp_text user "3V3_EN" (at -11.43 -17.145 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp bdd5cabe-db62-41b8-aef0-e212997e6908)
    )
    (fp_text user "GP13" (at 11.43 17.145 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp bf829bfc-ee97-4500-b663-1ffc0c014b58)
    )
    (fp_text user "GP4" (at 11.43 -10.795 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp c2cd2136-b152-4c8d-8289-a7f02960a202)
    )
    (fp_text user "GP17" (at -11.43 20.955 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp c4f0935d-2e39-4377-acd5-ce40dcae6269)
    )
    (fp_text user "GP16" (at -11.43 23.495 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp e5d85871-9ee2-491a-bb59-a3242400eca4)
    )
    (fp_text user "GP8" (at 11.43 1.905 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp f4af7cac-0297-411b-a037-c4c7f1bd858f)
    )
    (fp_text user "VSYS" (at -11.43 -22.225 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right))
      (tstamp f8d1576f-fc85-4227-a9f4-84cf671342d4)
    )
    (fp_text user "GP0" (at 11.43 -23.495 45) (layer "F.Fab")
      (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
      (tstamp f92f5543-6884-43ca-a733-80d8e8fb1514)
    )
    (fp_line (start -10.5 25.5) (end 10.5 25.5) (layer "F.SilkS") (width 0.12) (tstamp 0ee7d488-c8e1-4c44-86f9-cb3179c1dcc3))
    (fp_line (start -10.5 -25.5) (end -10.5 25.5) (layer "F.SilkS") (width 0.12) (tstamp 534bc5c9-f3fb-4616-80c7-bc456d144644))
    (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (layer "F.SilkS") (width 0.12) (tstamp 68482ec9-0f6b-4f20-939f-192de417ebc3))
    (fp_line (start 10.5 -25.5) (end 10.5 25.5) (layer "F.SilkS") (width 0.12) (tstamp 81447e22-84f7-41be-abbd-faa8158a1a92))
    (fp_circle (center 11.43 -24.13) (end 12.065 -24.13) (layer "F.SilkS") (width 0) (fill solid) (tstamp 6850ce9f-d644-475c-8473-9f77a98004b5))
    (fp_line (start 11 -26) (end -11 -26) (layer "F.CrtYd") (width 0.12) (tstamp 2f9ae238-1fb9-4e15-8fa1-677f80c040a6))
    (fp_line (start -11 -26) (end -11 26) (layer "F.CrtYd") (width 0.12) (tstamp 699ff8d4-2c0e-4217-95dd-298b70b89404))
    (fp_line (start -11 26) (end 11 26) (layer "F.CrtYd") (width 0.12) (tstamp 72b8bd2c-7322-4211-94c6-b8b57c1ae45f))
    (fp_line (start 11 26) (end 11 -26) (layer "F.CrtYd") (width 0.12) (tstamp 81d02e3f-8a4a-4f4a-8c87-a49e720a351f))
    (fp_line (start -10.5 -25.5) (end -10.5 25.5) (layer "F.Fab") (width 0.12) (tstamp 2b9714fd-9cdd-4b0a-940e-6a9561081b60))
    (fp_line (start 10.5 25.5) (end 10.5 -25.5) (layer "F.Fab") (width 0.12) (tstamp 66e308bb-0f20-48b1-96bd-7e938eb86aff))
    (fp_line (start 10.5 -24.2) (end 9.2 -25.5) (layer "F.Fab") (width 0.12) (tstamp 80bc0467-dc46-4791-9307-44241d7966d4))
    (fp_line (start 10.5 -25.5) (end -10.5 -25.5) (layer "F.Fab") (width 0.12) (tstamp d2cf8733-14a9-4c23-b276-1bc10c1a5f51))
    (fp_line (start -10.5 25.5) (end 10.5 25.5) (layer "F.Fab") (width 0.12) (tstamp e840b107-3750-438e-b78f-29c9d0d23fc4))
    (pad "1" thru_hole oval (at 8.82 -24.13) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 261789c0-418e-4ec0-8cdf-89abe1f96c5d) ${p.GP0.str})
    (pad "2" thru_hole oval (at 8.82 -21.59) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 82df91bd-b1f7-4cb5-a4b8-f014077ed225) ${p.GP1.str})
    (pad "3" thru_hole rect (at 8.82 -19.05) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp e2d28f85-8433-4782-86c1-698d98ca355b) ${p.GND.str})
    (pad "4" thru_hole oval (at 8.82 -16.51) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 6c215906-b1c0-41e7-a1ee-f64340a0df1f) ${p.GP2.str})
    (pad "5" thru_hole oval (at 8.82 -13.97) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 76c55b2f-8f9b-48f6-a612-6fe3631d36eb) ${p.GP3.str})
    (pad "6" thru_hole oval (at 8.82 -11.43) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 210013bf-6406-44cc-a685-766765aa871b) ${p.GP4.str})
    (pad "7" thru_hole oval (at 8.82 -8.89) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 2a1ac614-5190-4c1d-94c5-f92822392dbd) ${p.GP5.str})
    (pad "8" thru_hole rect (at 8.82 -6.35) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 3aca05ca-5eaa-49fe-b403-9e2bce888982) ${p.GND.str})
    (pad "9" thru_hole oval (at 8.82 -3.81) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp fc3ee03b-64c4-4765-a4db-f9ccddc815c0) ${p.GP6.str})
    (pad "10" thru_hole oval (at 8.82 -1.27) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 1cbf2788-2f4d-4a14-987b-1ca92d4e80a5) ${p.GP7.str})
    (pad "11" thru_hole oval (at 8.82 1.27) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp b8d2415c-f56e-4a89-978d-a2919d2209f5) ${p.GP8.str})
    (pad "12" thru_hole oval (at 8.82 3.81) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 721079ce-6e9b-4142-b40e-724402815846) ${p.GP9.str})
    (pad "13" thru_hole rect (at 8.82 6.35) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 156789ac-0299-4e4b-9bdc-aae415420eec) ${p.GND.str})
    (pad "14" thru_hole oval (at 8.82 8.89) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp fda6fba3-26de-4533-ab37-f87bb8ca8965) ${p.GP10.str})
    (pad "15" thru_hole oval (at 8.82 11.43) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp db248dbe-bef4-43e0-991f-f8907ae081d4) ${p.GP11.str})
    (pad "16" thru_hole oval (at 8.82 13.97) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 8b5154dc-4718-4a03-ad67-ed035a4319ce) ${p.GP12.str})
    (pad "17" thru_hole oval (at 8.82 16.51) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp eb64b7d2-d623-452c-9703-2bb0265ee337) ${p.GP13.str})
    (pad "18" thru_hole rect (at 8.82 19.05) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp f7386878-6bd2-49fb-be47-6588e913174b) ${p.GND.str})
    (pad "19" thru_hole oval (at 8.82 21.59) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp fa8076fb-ecc2-4918-a4f3-511178e9ad37) ${p.GP14.str})
    (pad "20" thru_hole oval (at 8.82 24.13) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 4b6b7c47-5e11-4065-b26e-9c14c9c8ee50) ${p.GP15.str})
    (pad "21" thru_hole oval (at -8.82 24.13) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 7a45c78c-faae-432b-8399-806250e23db7) ${p.GP16.str})
    (pad "22" thru_hole oval (at -8.82 21.59) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 852f4f24-f0ec-4812-8953-10a1c9ba8b18) ${p.GP17.str})
    (pad "23" thru_hole rect (at -8.82 19.05) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 6fbe5d8d-e43a-4207-a531-c4dfe41759ce) ${p.GND.str})
    (pad "24" thru_hole oval (at -8.82 16.51) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 48f29450-601c-4f43-bede-558f16a2580a) ${p.GP18.str})
    (pad "25" thru_hole oval (at -8.82 13.97) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 0cf035fe-7441-41a9-8ecd-8633f9511a86) ${p.GP19.str})
    (pad "26" thru_hole oval (at -8.82 11.43) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 4aa34793-001c-422a-9a9e-f2fa24b7c918) ${p.GP20.str})
    (pad "27" thru_hole oval (at -8.82 8.89) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 07bfbc8a-823e-44b5-ab95-5c0659fd56bb) ${p.GP21.str})
    (pad "28" thru_hole rect (at -8.82 6.35) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 6fd23c62-f256-47b1-9fb2-80a0473029fb) ${p.GND.str})
    (pad "29" thru_hole oval (at -8.82 3.81) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 0e54c542-e3a2-4db6-883d-37a3ad94739d) ${p.GP22.str})
    (pad "30" thru_hole oval (at -8.82 1.27) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 49dcd950-fbab-4ac5-9a36-86d2c2a0259e) ${p.RUN.str})
    (pad "31" thru_hole oval (at -8.82 -1.27) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 84cce8d0-f83b-4f08-af4b-1d62af837a54) ${p.GP26.str})
    (pad "32" thru_hole oval (at -8.82 -3.81) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp da79c04c-a207-48dc-a5d7-8a078322a160) ${p.GP27.str})
    (pad "33" thru_hole rect (at -8.82 -6.35) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 9db6e273-f7b0-4ab9-9b75-cb2195ede133) ${p.AGND.str})
    (pad "34" thru_hole oval (at -8.82 -8.89) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 36be125c-d820-40b1-81f5-37cb6c4c1027) ${p.GP28.str})
    (pad "35" thru_hole oval (at -8.82 -11.43) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 510cc5c4-e61c-4e17-93d1-bd10b62ad6fb) ${p.ADC_VREF.str})
    (pad "36" thru_hole oval (at -8.82 -13.97) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 33256a6e-b053-471b-ac8e-081487946d0e) ${p._3V3.str})
    (pad "37" thru_hole oval (at -8.82 -16.51) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp ac928fb2-0ce9-4e34-8e2d-402b47a0d641) ${p._3V3_EN.str})
    (pad "38" thru_hole rect (at -8.82 -19.05) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp cb792c93-111c-4188-a8ba-8930e71f97d8) ${p.GND.str})
    (pad "39" thru_hole oval (at -8.82 -21.59) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp b8260a4c-72c5-48e1-9736-d2140182d3fc) ${p.VSYS.str})
    (pad "40" thru_hole oval (at -8.82 -24.13) (size 1.84 1.7) (drill oval 1.16 1.02) (layers *.Cu *.Mask) (tstamp 1a60f562-a956-4d54-a00f-6201c5b12308) ${p.VBUS.str})
    )
    `
    }
  }
}


