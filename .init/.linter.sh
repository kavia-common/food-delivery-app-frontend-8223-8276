#!/bin/bash
cd /home/kavia/workspace/code-generation/food-delivery-app-frontend-8223-8276/food_delivery_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

