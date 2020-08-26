parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
java -jar /$parent_path/lib/fileupload-0.0.1-SNAPSHOT.jar &
open /$parent_path/lib/dist/index.html
sleep 5d