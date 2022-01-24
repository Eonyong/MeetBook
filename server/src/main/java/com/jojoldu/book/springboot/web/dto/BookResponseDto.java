package com.jojoldu.book.springboot.web.dto;

import java.sql.Timestamp;

import com.jojoldu.book.springboot.domain.book.Book;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookResponseDto {

    private int id;
    private String book_name;
    private String book_author;
    private String book_contents;
    private String book_publisher;
    private String isbn;
    private Timestamp book_pubdate;
    private int loan_count;
    private int genre_id;
    private String book_thumbnail_url;

    public BookResponseDto(Book book) {
        this.id = id;
        this.book_name = book_name;
        this.book_author = book_author;
        this.book_contents = book_contents;
        this.book_publisher = book_publisher;
        this.isbn = isbn;
        this.book_pubdate = book_pubdate;
        this.loan_count = loan_count;
        this.genre_id = genre_id;
        this.book_thumbnail_url = book_thumbnail_url;
    }
}
