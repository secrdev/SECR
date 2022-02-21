FROM golang:1.17

WORKDIR /backend  

COPY . . 

RUN go get -d -v ./...
RUN go install -v ./...

RUN go build -o secr . 

CMD ["/backend/secr"]
