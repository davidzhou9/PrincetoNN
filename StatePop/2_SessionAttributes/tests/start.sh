# Test your local Node.JS lambda function with lambda-local
# Install from https://www.npmjs.com/package/lambda-local
#


# lambda-local -l ../src/index.js -h handler -e events/launch.js
# lambda-local -l ../src/index.js -h handler -e events/intent-slot.js

# lambda-local -l ../src/index.js -h handler -e events/intent-slot-attributes.js

# lambda-local -l ../src/index.js -h handler -e events/intent2.js

# lambda-local -l ../src/index.js -h handler -e events/intent3-slot.js

# lambda-local -l ../src/index.js -h handler -e events/help.js
# lambda-local -l ../src/index.js -h handler -e events/stop.js

lambda-local -l ../src/index.js -h handler -e events/stop-attributes.js
