FROM continuumio/miniconda3

COPY requirements.txt /tmp/
COPY ./app /app
WORKDIR "/app"

RUN conda install --file /tmp/requirements.txt

ENTRYPOINT [ "python3" ]
CMD [ "dashboard.py" ]