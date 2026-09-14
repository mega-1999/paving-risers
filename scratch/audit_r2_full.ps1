$base = "https://pub-a9b7eff88c5d4cb7b2837afc51696bde.r2.dev"

# ALL paths referenced in the codebase
$paths = @(
    # Branding
    "images/branding/paving_logo.png",
    "images/branding/paving_hero.png",
    "images/branding/favicon.png",

    # Manhole riser images
    "images/manhole_riser/round_manhole_riser_iron_finish.png",
    "images/manhole_riser/adjustable_manhole_riser_low_screw_coated.png",

    # Catch basin images
    "images/catch_basin_riser/square_catch_basin_riser_coated.png",
    "images/catch_basin_riser/rectangle_catch_basin_riser_right.png",
    "images/catch_basin_riser/rectangle_catch_basin_riser_cast_iron.png",

    # Tool images
    "images/tools/chisel_tool.png",
    "images/tools/manhole_cover_hook.png",
    "images/tools/valve_box_cover_bar.png",
    "images/tools/sewer_plug_puller.png",
    "images/tools/valve_box_lifter.png",
    "images/tools/valve_box_tongue.png",

    # Videos - animations
    "videos/animations/paving_logo_animation.mp4",
    "videos/animations/ultimate_paving_risers.mp4",
    "videos/animations/1.924.mp4",

    # Videos - app_showcase
    "videos/app_showcase/footer_all_product.mp4",
    "videos/app_showcase/android_ios.mp4",

    # Videos - manhole_riser
    "videos/manhole_riser/fixed_manhole_riser_installation.mp4",
    "videos/manhole_riser/adjustable_manhole_riser_with_frame.mp4",

    # Videos - catch_basin_riser
    "videos/catch_basin_riser/catch_basin_riser_animation.mp4",

    # Videos - custom_riser
    "videos/custom_riser/d_shape_custom_riser_animation.mp4",

    # GLBs
    "glbs/PR_manhole_round_riser_black_coated_.glb",
    "glbs/PR_manhole_round_adjustbable_riser_screw_black_coated_.glb",
    "glbs/PR_manhole_round_adjustbable_riser_low_screw_black_coated_.glb",
    "glbs/PR_catch_basin_square_riser_black_coated_.glb",
    "glbs/PR_catch_basin_rectangle_riser_black_coated_.glb",
    "glbs/PR_Curb_inlet_rectangle_riser_black_coated.glb",
    "glbs/D_shape_paving_riser.glb",

    # Assets
    "assets/PAVING-RISERS/paving%20riser%201.5201.png",
    "assets/PAVING-RISERS/paving%20riser%201.5200.png",
    "assets/industries/image3.jpeg",
    "assets/industries/image5.jpeg",
    "assets/industries/image13.jpg",
    "assets/industries/image14.jpeg",
    "assets/industries/image17.jpg",
    "assets/industries/image18.jpeg",
    "assets/industries/image19.jpeg",
    "assets/industries/image20.jpg",
    "assets/catalog/MEGA_PAVING_RISERS_CATALOGS.pdf",

    # Legacy video paths
    "video/GIF%20paving%20risere%20with%20frame.748.mp4",
    "video/video1.mp4",
    "video/manhole-covers.mp4",
    "video/paving_riser/paving%20riser%201.5213.mp4",
    "video/mold/2%20feet%20mold.54.mp4"
)

$ok = 0
$fail = 0

foreach ($path in $paths) {
    try {
        $response = Invoke-WebRequest -Uri "$base/$path" -Method HEAD -UseBasicParsing -ErrorAction Stop
        Write-Host "OK   $path"
        $ok++
    } catch {
        $code = $_.Exception.Response.StatusCode.value__
        Write-Host "MISS $path"
        $fail++
    }
}

Write-Host ""
Write-Host "=== SUMMARY: $ok OK, $fail MISSING ==="
