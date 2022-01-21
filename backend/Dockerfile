FROM golang:1.17

WORKDIR /go/secr 
COPY . . 

RUN go get -d -v ./...
RUN go install -v ./...

CMD ["secr"]
