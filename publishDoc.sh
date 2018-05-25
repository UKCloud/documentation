#!/bin/sh
# https://blog.markvincze.com/build-and-publish-documentation-and-api-reference-with-docfx-for-net-core-projects/
#set -e

#export VSINSTALLDIR="C:\Program Files (x86)\Microsoft Visual Studio\2017\Community"
#export VisualStudioVersion="15.0"

#docfx ./docs/docfx.json
#docfx ./docfx/docfx.json
echo "Delete _site and obj folders before re-creating them"
rm -rf _site/ obj/

echo "Rebuild the page"
docfx docfx.json

SOURCE_DIR=$PWD
TEMP_REPO_DIR=$PWD/../my-project-gh-pages

echo "Copy documentation into the repo"
#cp -r $SOURCE_DIR/docs/_site/* .
cp -r $SOURCE_DIR/_site/* ./docs/
#cp -r $SOURCE_DIR/docfx/* ./docs/*

echo "Create new TOC"
powershell /c/repos/AZS_dev_black/docs/code/powershell/GitHubPages/CreateTOC-Andy.ps1

echo "Push the new docs to the remote branch"
git add . -A
git commit -m "Update generated documentation"
#git push origin gh-pages
git push