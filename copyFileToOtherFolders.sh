if [[ "$#" -lt 2 ]]; then
    echo "Illegal number of parameters - require file name and destination folders"
    exit 1
fi

fileToBeCopied=$1
filename=$(basename $fileToBeCopied)
echo "filename: $filename"
shift
echo "Path of the file to be copied: $fileToBeCopied"
if test -f "$fileToBeCopied"; then
    echo "File $fileToBeCopied exists."
else
    echo "$fileToBeCopied file does not exist."
    exit 1
fi

folderPaths="$@"
for folderPath in $folderPaths
do
    echo "Copying file $filename to folder $folderPath"
    if [ -d "$folderPath" ]; then
        echo "Folder $folderPath exists."
    else
        echo "$folderPath folder does not exist."
        break;
    fi
    cp $fileToBeCopied $folderPath
    echo "Changing permission of $fileToBeCopied to 777"
    chmod 777 $folderPath/$filename
done
