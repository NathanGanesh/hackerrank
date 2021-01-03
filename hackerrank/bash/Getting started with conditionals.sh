read -p "Are you sure? " -n 1 -r 
if [[  $REPLY =~ ^[Yy] ]]
then
echo "YES"
elif [[  $REPLY =~ ^[Nn] ]]
then
echo "NO"
fi
