# Télécharge l'image depuis une URL
$imageUrl = "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=600&fit=crop"
$outputPath = "public\images\card-hand.png"

try {
    Invoke-WebRequest -Uri $imageUrl -OutFile $outputPath
    Write-Host "✅ Image téléchargée avec succès dans $outputPath"
} catch {
    Write-Host "❌ Erreur lors du téléchargement: $_"
}
