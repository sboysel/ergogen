// MountingHole_2.2mm_M2_Pad_Via
module.exports = {
    nets: {
        net: undefined
    },
    params: {
        class: 'HOLE',
    },
    body: p => `
    (module "MountingHole_M2_Pad_NonPTH_TopOnly" 
      ${p.at /* parametric position */}

      (fp_circle (center 2.47 0) (end 2.97 0) (layer "F.Paste") (width 0.12) (fill solid) (tstamp 12304338-07fa-4c62-a66a-904af1e09b36))
      (fp_circle (center 0 -2.47) (end 0.5 -2.47) (layer "F.Paste") (width 0.12) (fill solid) (tstamp 2861e045-b35c-4679-bc75-5ecf9f36e964))
      (fp_circle (center -2.139083 -1.235) (end -1.639083 -1.235) (layer "F.Paste") (width 0.12) (fill solid) (tstamp 3273c2fa-6a26-4557-b3d7-8ce49c19ac76))
      (fp_circle (center -1.235 -2.139083) (end -0.735 -2.139083) (layer "F.Paste") (width 0.12) (fill solid) (tstamp 3aa16647-2a81-4481-b900-58301d68f186))
      (fp_circle (center 0 2.47) (end 0.5 2.47) (layer "F.Paste") (width 0.12) (fill solid) (tstamp 3b3b576a-8e1d-4f5b-a918-c36d77e7045d))
      (fp_circle (center 1.235 2.139083) (end 1.735 2.139083) (layer "F.Paste") (width 0.12) (fill solid) (tstamp 42545444-b2e2-413a-b163-2826b8bb304c))
      (fp_circle (center -2.139083 1.235) (end -1.639083 1.235) (layer "F.Paste") (width 0.12) (fill solid) (tstamp 5a272f26-5cc0-4282-9ae8-f0138b6a195d))
      (fp_circle (center 2.139083 1.235) (end 2.639083 1.235) (layer "F.Paste") (width 0.12) (fill solid) (tstamp 78d83063-fc1c-4e82-be17-95fb8454e8f5))
      (fp_circle (center 1.235 -2.139083) (end 1.735 -2.139083) (layer "F.Paste") (width 0.12) (fill solid) (tstamp 861be960-7212-40bf-b0ae-21ad8998e903))
      (fp_circle (center -1.235 2.139083) (end -0.735 2.139083) (layer "F.Paste") (width 0.12) (fill solid) (tstamp a2db2489-155a-45a7-bd8c-6c44ea8880b0))
      (fp_circle (center 2.139083 -1.235) (end 2.639083 -1.235) (layer "F.Paste") (width 0.12) (fill solid) (tstamp c82f7efe-2a13-46e2-9caa-486b98a1a6a3))
      (fp_circle (center -2.47 0) (end -1.97 0) (layer "F.Paste") (width 0.12) (fill solid) (tstamp e42ef0ad-9d53-455b-a935-88489b3cb509))
      (fp_circle (center 0 0) (end 3.05 0) (layer "Cmts.User") (width 0.15) (fill none) (tstamp 31ad97e7-f4b1-4875-b88c-2ac5f53f0a94))
      (fp_circle (center 0 0) (end 3 0) (layer "Eco1.User") (width 0.12) (fill none) (tstamp 5c5b1fcd-c8f2-46ec-af98-d533548ad84d))
      (fp_circle (center 0 0) (end 3.2 0) (layer "F.CrtYd") (width 0.05) (fill none) (tstamp e72872a0-ade8-4476-a8f4-cdbcd581515c))
      (pad "" np_thru_hole circle (at 0 0) (size 3.8 3.8) (drill 3.8) (layers *.Mask) (tstamp 44216b30-6afe-425e-a43d-9a7ecfd6817d))
      (pad "1" smd circle (at 0 0) (size 6.1 6.1) (layers "F.Cu" "F.Mask") (tstamp a69e605a-9052-440f-bcc9-68da52cfa154))
    )`
}

      // (fp_text reference "${p.ref}" (at 0 -4) (layer "F.SilkS") ${p.ref_hide}
      //   (effects (font (size 1 1) (thickness 0.15)))
      //   (tstamp fc3fa9a1-422b-45a5-9761-badff137a9d2)
      // )
      // (fp_text value "MountingHole_3mm_Pad_NonPTH_TopOnly" (at 0 4) (layer "F.Fab")
      //   (effects (font (size 1 1) (thickness 0.15)))
      //   (tstamp 0c22d126-85dd-46ae-bcd9-a3e8c01f625a)
      // )


