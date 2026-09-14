$base = "https://pub-a9b7eff88c5d4cb7b2837afc51696bde.r2.dev"

$paths = @(
    "glbs/PR_manhole_round_riser_black_coated_.glb",
    "glbs/PR_catch_basin_square_riser_black_coated_.glb",
    "glbs/D_shape_paving_riser.glb",
    "images/branding/paving_logo.png",
    "images/branding/paving_hero.png",
    "images/branding/favicon.png",
    "images/manhole_riser/round_manhole_riser_iron_finish.png",
    "images/tools/chisel_tool.png",
    "images/catch_basin_riser/square_catch_basin_riser_coated.png",
    "videos/app_showcase/footer_all_product.mp4",
    "videos/app_showcase/android_ios.mp4",
    "videos/animations/paving_logo_animation.mp4",
    "videos/animations/ultimate_paving_risers.mp4",
    "videos/catch_basin_riser/catch_basin_riser_animation.mp4",
    "videos/manhole_riser/fixed_manhole_riser_installation.mp4",
    "assets/PAVING-RISERS/paving%20riser%201.5201.png",
    "assets/industries/image3.jpeg",
    "assets/catalog/MEGA_PAVING_RISERS_CATALOGS.pdf",
    "video/GIF%20paving%20risere%20with%20frame.748.mp4"
)

foreach ($path in $paths) {
    try {
        $response = Invoke-WebRequest -Uri "$base/$path" -Method HEAD -UseBasicParsing -ErrorAction Stop
        Write-Host "200 $path"
    } catch {
        $code = $_.Exception.Response.StatusCode.value__
        Write-Host "$code $path"
    }
}
