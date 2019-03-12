[CmdletBinding()]
param (
    [Parameter(Mandatory = $true)]
    [ValidateScript({ if (-not (Test-Path $_)) { throw "Folder path does not exist" } else { if (-not (Test-Path -Path "$_\articles")) { throw "Folder specified is not the documentation folder" } else { $true } } })]
    [String]
    $DocumentationFolder,
    [Parameter(Mandatory = $true)]
    [ValidateScript({ if (-not (Test-Path $_)) { New-item -ItemType Directory -Path $_ -Force } else { $true } })]
    [String]
    $DestinationFolder
)

# Declare variables
$UrlPrefix = "https://docs.ukcloud.com/articles/"

# Declare empty array
$InfoArray = @()

# Declare to translate product names
$ProductTable = @{
    azs    = "UKCloud for Microsoft Azure"
    cdsz   = "Cross Domain Security Zone"
    conn   = "Connectivity"
    cs     = "Cloud Storage"
    draas  = "Disaster Recovery as a Service"
    email  = "Email and Collaboration"
    enbl   = "Cloud Enablement"
    gpu    = "Cloud GPU"
    hpc    = "High Performance Compute"
    migr   = "Migration to the Cloud"
    orcl   = "UKCloud for Oracle Software"
    oshift = "UKCloud for OpenShift"
    ostack = "UKCloud for OpenStack"
    ptl    = "UKCloud Portal"
    prc    = "Private Cloud for Compute"
    pro    = "Private Cloud for Oracle"
    prs    = "Private Cloud for Storage"
    sra    = "Secure Remote Access"
    sup    = "Support Docs"
    vmw    = "UKCloud for VMware"
    other  = "Other"
}

# Declare to translate type names
$TypeTable = @{
    faq = "FAQs"
    dfx = "DocFX"
    gs  = "Getting Started Guides"
    how = "How To Guides"
    ref = "Reference Guides"
    sco = "Service Scopes"
    vid = "Video"
}

# Get list of all articles
$Articles = Get-ChildItem -Path "$DocumentationFolder\articles" -Recurse -Filter "*.md"

# Create info object for each article
foreach ($Article in $Articles) {
    $Content = Get-Content -Path $Article.FullName
    $ArticleInfo = [PSCustomObject]@{
        Product  = $ProductTable[($Article.Name -split "-")[0]]
        Title    = ($Content | Select-String -Pattern "toc_title") -replace "toc_title: ", ""
        Category = $TypeTable[((($Article.Name -split "-")[1]).split("."))[0]]
        Link     = $UrlPrefix + ($Article.DirectoryName).split("\")[-1] + "/" + ($Article.Name -replace ".md", ".html")
    }
    $InfoArray += $ArticleInfo
}

# Export a CSV file
$CsvFilePath = $DestinationFolder.TrimEnd("\") + "\" + "KCArticleReport-" + (Get-Date -Format dd-MM-yyyy) + ".csv"
$InfoArray | Sort-Object -Property Product, Category, Title | Export-Csv -Path $CsvFilePath -NoTypeInformation

Write-Output -InputObject "CSV file saved to $CsvFilePath"
