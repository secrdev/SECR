FROM golang:1.17

WORKDIR /backend  

COPY . . 

RUN go get -d -v ./...
RUN go install -v ./...

RUN go build -o secr . 

RUN apk add --no-cache nmap

CMD ["/backend/secr"]
