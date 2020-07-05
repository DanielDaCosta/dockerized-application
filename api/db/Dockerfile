FROM mysql:5.7
ENV MYSQL_ROOT_PASSWORD=teste123
ENV MYSQL_DATABASE=daniel_mysql

# Add the content of the sql-scripts/ directory to your image
# All scripts in docker-entrypoint-initdb.d/ are automatically
# executed during container startup
COPY ./api/db/queries /docker-entrypoint-initdb.d/