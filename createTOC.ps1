###Requires -RunAsAdministrator
<#
    .SYNOPSIS
        Create Table of Content yaml file for each Subfolder in Articles.

    .DESCRIPTION
        Create Table of Content yaml file for each Subfolder in Articles of current directory. This is for GitHub Pages DOCs creation.

    .PARAMETER Source
        Source folder location
        Note:
        It will check if the folder exists.
        Example: "C:\AzureStackUpdate"

    .EXAMPLE
        Set-TableOfContent -Source "C:\Docfx\Articles\"

    .EXAMPLE
        Set-TableOfContent

    .LINK
        https://aka.ms/azurestackupdatedownload

    #>
[CmdletBinding()]
param (
    [Parameter(Mandatory = $false)]
    [ValidateScript( {If ((Test-Path $_)) {Test-Path $_ -Verbose }})]
    [String]
    $Source = "$PWD\articles\"
)
    
# Install and Import YAML Parser module: powershell-yaml
Install-Module -Name powershell-yaml -Force
Import-Module -Name powershell-yaml
    
# Declare Articles Folder based on current directory
#$ArticlesFolder = "$PWD\articles\"
$ArticlesFolder = $Source
$FoldersFromBase = Get-ChildItem -Directory -Path $ArticlesFolder
    
Write-Host "Found $($FoldersFromBase.count) Folders in $($ArticlesFolder)"
    
# For every folder in Articles folder declare BaseFolder
ForEach ($FolderB in $FoldersFromBase) {
        
    $BaseFolder = "$PWD\articles\$FolderB"
    
    # Filter for only MarkDown files
    $FiletypeFilter = "*.md"
    $MDArticles = Get-ChildItem -Path $BaseFolder -Filter $FiletypeFilter -Recurse
    
    # Create Array Constructs to create YAML output
    $TOCStruct = @()
    $TOCArrayProperties = @()
    $TOCArrayPropertiesCustom = @()
    ForEach ($MDArticle in $MDArticles) {
        $TOCProp = $MDArticle | Select-String -Pattern "toc_"  | Select-Object -ExpandProperty Line
        $TOCArrayProperties += $TOCProp 
        
        # Read values from the header of the .md file
        $ourObject = [PSCustomObject]@{
            Rootlink = ($MDArticle | Select-String -Pattern "toc_rootlink"  | Select-Object -ExpandProperty Line) -replace "toc_rootlink:\s?", ""
            Sub1     = ($MDArticle | Select-String -Pattern "toc_sub1"  | Select-Object -ExpandProperty Line) -replace "toc_sub1:\s?", ""
            Sub2     = ($MDArticle | Select-String -Pattern "toc_sub2"  | Select-Object -ExpandProperty Line) -replace "toc_sub2:\s?", ""
            Sub3     = ($MDArticle | Select-String -Pattern "toc_sub3"  | Select-Object -ExpandProperty Line) -replace "toc_sub3:\s?", ""
            Sub4     = ($MDArticle | Select-String -Pattern "toc_sub4"  | Select-Object -ExpandProperty Line) -replace "toc_sub4:\s?", ""
            Title    = ($MDArticle | Select-String -Pattern "toc_title"  | Select-Object -ExpandProperty Line) -replace "toc_title:\s?", ""
            MDlink   = ($MDArticle | Select-String -Pattern "toc_mdlink"  | Select-Object -ExpandProperty Line) -replace "toc_mdlink:\s?", ""
        }
        $TOCArrayPropertiesCustom += $ourObject 
    }
    
    # Sort Objects so that Rootlink Users is first shown.
    $SortedCustom = $TOCArrayPropertiesCustom  | Sort-Object -Property Rootlink -Descending | Sort-Object -Property Sub1, Sub2, Sub3, Sub4, Title, MDlink
    
    ForEach ($File in $SortedCustom) {
    
        # Work out if we need to add a new Top Level item
        $exists = $false
        ForEach ($TOCS in $TOCStruct) {
            If ($TOCS.name -eq $($File.Rootlink)) {
                $exists = $true
            }
        }
    
        # Add new top level if necessary
        If ($exists -eq $false) {
            $TOCStruct += @{ 
                name  = $($File.Rootlink) 
                items = @() 
            }
        }
    
        # Work out Sub1 Level structure
        ForEach ($TOCS in $TOCStruct) {
            # Identify and use the correct top-level item.
            If ($TOCS.name -eq $($File.Rootlink)) {
    
                # Work out if we need to add a new Sub1 level item
                $exists = $false
                ForEach ($First in $TOCS.items) {
                    If ($First.name -eq $($File.Sub1)) {
                        $exists = $true
                    }
                }
    
                # Add new Sub1 level if necessary
                If ($exists -eq $false) {
                    # If sub1 is empty, add this article under rootlink
                    If (([string]::IsNullOrEmpty($($File.Sub1)))) {
                        $TOCS.items += [ordered] @{
                            name = $($File.Title)
                            href = $($File.MDlink)
                        }
                    }
                    Else {
                        $TOCS.items += [ordered] @{
                            name  = $($File.Sub1)
                            items = @()
                        }
                    }
                }
    
                # We now know we have Rootlink and Sub1 level nodes.
                # Add Items or submenus to Sub1 Level structure
                ForEach ($TOCSItem in $TOCS.items) {
                    If ($TOCSItem.Name -eq $($File.Sub1)) {
    
                        # If sub2 is empty, add this article under sub1
                        If (([string]::IsNullOrEmpty($($File.Sub2)))) {
                            $TOCSItem.items += [ordered] @{
                                name = $($File.Title)
                                href = $($File.MDlink)
                            }
                        }
    
                        # sub2 isn't empty: article sits under sub2 or lower
                        Else {
                            # Work out if we need to add a new Sub2 level item
                            $s2exists = $false
                            ForEach ($Second in $TOCSItem.items) {
                                if ($Second.name -eq $($File.Sub2)) {
                                    $s2exists = $true
                                }
                            }
    
                            # Add new Sub2 level if necessary
                            If ($s2exists -eq $false) {
                                $TOCSItem.items += [ordered] @{
                                    name  = $($File.Sub2)
                                    items = @()
                                }
                            }
    
                            # We now know we have Rootlink, Sub1 and Sub2 level nodes.
                            # Add Items or submenus to Sub2 Level Structure
                            ForEach ($Lev2Item in $TOCSItem.items) {
                                If ($Lev2Item.Name -eq $($File.Sub2)) {
                                    
                                    # If Sub3 is empty, add this article under Sub2
                                    If (([string]::IsNullOrEmpty($($File.Sub3)))) {
                                        $Lev2Item.items += [ordered] @{
                                            name = $($File.Title)
                                            href = $($File.MDlink)
                                        }
                                        #Write-Host "Sub3 Empty $($File.MDlink)"
                                    }
                
                                    # Sub3 isn't empty: article sits under Sub3 or lower
                                    Else {
                                        # Work out if we need to add a new Sub3 level item
                                        $s3exists = $false
                                        ForEach ($Third in $Lev2Item.items) {
                                            #ForEach ($Third in $Lev2Item.items.items) {
                                            if ($Third.name -eq $($File.Sub3)) {
                                                #Write-Host "$($Third.Name) vs $($File.Sub3)"
                                                $s3exists = $true
                                            }
                                        }
    
                                        # Add new Sub3 level if necessary
                                        If ($s3exists -eq $false) {
                                            $Lev2Item.items += [ordered] @{  # !!!!!
                                                #$Lev2Item.items.items += [ordered] @{  # !!!!!
                                                name  = $($File.Sub3)
                                                items = @()
                                            }
                                        }
                                        # We now know we have Rootlink, Sub1 and Sub2 and Sub3 level nodes.
                                        # Add Items or submenus to Sub3 Level Structure
                                        #ForEach ($Lev3Item in $Lev2Item.items.items) {
                                        ForEach ($Lev3Item in $Lev2Item.items) {
                                            If ($Lev3Item.Name -eq $($File.Sub3)) {
    
                                                # If Sub4 is empty, add this article under Sub3
                                                If (([string]::IsNullOrEmpty($($File.Sub4)))) {
                                                    $Lev3Item.items += [ordered] @{
                                                        name = $($File.Title)
                                                        href = $($File.MDlink)
                                                    }
                                                    #Write-Host "Sub4 Empty $($File.MDlink)"
                                                }
                                                Else {
                                                    # Work out if we need to add a new Sub4 level item
                                                    $s4exists = $false
                                                    #ForEach ($Fourth in $Lev3Item.items.items) {
                                                    ForEach ($Fourth in $Lev3Item.items) {
                                                        if ($Fourth.name -eq $($File.Sub4)) {
                                                            #Write-Host "$($Third.Name) vs $($File.Sub3)"
                                                            $s4exists = $true
                                                        }
                                                    }
                
                                                    # Add new Sub4 level if necessary
                                                    If ($s4exists -eq $false) {
                                                        #$Lev3Item.items.items += [ordered] @{  # !!!!!
                                                        $Lev3Item.items += [ordered] @{  # !!!!!
                                                            name  = $($File.Sub4)
                                                            items = @()
                                                        }
                                                    }
                                                }
                                                # We now know we have Rootlink, Sub1 and Sub2 and Sub3 level nodes.
                                                # Add Items or submenus to Sub3 Level Structure
                                                #ForEach ($Lev4Item in $Lev3Item.items.items) {
                                                ForEach ($Lev4Item in $Lev3Item.items) {
                                                    If ($Lev4Item.Name -eq $($File.Sub4)) {
                                                        
                                                        # If Sub4 is NOT empty, add this article under Sub4
                                                        If (-not([string]::IsNullOrEmpty($($File.Sub4)))) {
                                                            $Lev4Item.items += [ordered] @{
                                                                name = $($File.Title)
                                                                href = $($File.MDlink)
                                                            }
                                                            #Write-Host "Sub4 Empty $($File.MDlink)"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
        
    <#  
        Bug with Single Item Arrays
        https://stackoverflow.com/questions/18662967/convertto-json-an-array-with-a-single-item
        We cannot use pipe -> $TOCStruct | ConvertTo-Yaml  -OutFile $BaseFolder\toc.yml -Force
        We have to use -> ConvertTo-Yaml -Data $TOCStruct -OutFile $BaseFolder\toc.yml -Force
    #>
        
    $CaptureYamlOut = ConvertTo-Yaml -Data $TOCStruct
    ConvertTo-Yaml -Data $TOCStruct -OutFile $BaseFolder\toc.yml -Force
    Write-Host "Created new toc.yml file under $BaseFolder"
    Write-Verbose -Message $CaptureYamlOut
}