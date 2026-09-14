$base = "https://pub-a9b7eff88c5d4cb7b2837afc51696bde.r2.dev"

$paths = @(
    "images/branding/paving_logo.png",
    "images/branding/paving_hero.png",
    "images/branding/favicon.png",
    "videos/app_showcase/footer_all_product.mp4",
    "videos/animations/paving_logo_animation.mp4",
    "images/tools/chisel_tool.png",
    "images/manhole_riser/round_manhole_riser_iron_finish.png",
    "assets/industries/image3.jpeg",
    "glbs/PR_manhole_round_riser_black_coated_.glb"
)

Write-Host "=== ATTEMPT 1 ==="
foreach ($path in $paths) {
    try {
        $response = Invoke-WebRequest -Uri "$base/$path" -Method HEAD -UseBasicParsing -ErrorAction Stop
        Write-Host "200 (size: $($response.Headers['Content-Length'])) $path"
    } catch {
        $code = $_.Exception.Response.StatusCode.value__
        Write-Host "$code $path"
    }
}

Start-Sleep -Seconds 3

Write-Host ""
Write-Host "=== ATTEMPT 2 (3s later) ==="
foreach ($path in $paths) {
    try {
        $response = Invoke-WebRequest -Uri "$base/$path" -Method HEAD -UseBasicParsing -ErrorAction Stop
        Write-Host "200 (size: $($response.Headers['Content-Length'])) $path"
    } catch {
        $code = $_.Exception.Response.StatusCode.value__
        Write-Host "$code $path"
    }
}

Start-Sleep -Seconds 5

Write-Host ""
Write-Host "=== ATTEMPT 3 (8s later) ==="
foreach ($path in $paths) {
    try {
        $response = Invoke-WebRequest -Uri "$base/$path" -Method HEAD -UseBasicParsing -ErrorAction Stop
        Write-Host "200 (size: $($response.Headers['Content-Length'])) $path"
    } catch {
        $code = $_.Exception.Response.StatusCode.value__
        Write-Host "$code $path"
    }
}
