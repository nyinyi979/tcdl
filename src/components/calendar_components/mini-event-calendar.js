import jQuery from "jquery";
(function($) {
    const calenderTpl = `
		<div id="calTitle" class="flex w-fit mx-auto gap-4 items-center md:text-2xl xs:text-lg xxs:text-base text-xs md:py-2 px-2 pt-2 ">
			<button type="button" class="inline-block self-start prev bg-cover hover:scale-105 duration-300 month-mover xs:w-8 xs:h-8 w-4 h-4 rotate-90 [background-image:url('/drop-icon.png')]"></button>
			<div id="monthYear" class="inline-block font-[700] text-[#4b2c64]"></div>
			<button type="button" class="inline-block self-end next bg-cover hover:scale-105 duration-300 month-mover xs:w-8 xs:h-8 w-4 h-4 -rotate-90 [background-image:url('/drop-icon.png')]"></button>
		</div>
		<div class="md:text-sm text-xs">
			<div id="calThead" class="text-center flex flex-wrap w-full py-4"></div>
			<div id="calTbody" class="flex flex-wrap p-1"></div>
		</div>
		<div id="calTFooter" class="flex my-2 justify-between items-center md:text-lg xs:text-sm text-xs">
			<h3 id="eventTitle" class=" p-2 font-[600]">No events today.</h3>
			<a href="javascript:void(0);" id="calLink" class="p-2 font-[600]">ALL EVENTS</a>
		</div>
    `;
    const weekDaysFromSunday = `
    <div class="w-[14.2%]">Sun</div>
    <div class="w-[14.2%]">Mon</div>
    <div class="w-[14.2%]">Tue</div>
    <div class="w-[14.2%]">Wed</div>
    <div class="w-[14.2%]">Thu</div>
    <div class="w-[14.2%]">Fri</div>
    <div class="w-[14.2%]">Sat</div>`;
    const weekDaysFromMonday = '<div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>';
    const shortMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    $.fn.miniEventCalendar = $.fn.MEC = function(options) {
        const settings = $.extend({
            calendar_link: "",
            events: [],
            from_monday: false,
            onMonthChanged: null
        }, options);

        const miniCalendar = this;

        this.addClass('mini-cal').html(calenderTpl);

        const thead = miniCalendar.find("#calThead");
        const tbody = miniCalendar.find("#calTbody");
        const calTitle = miniCalendar.find("#monthYear");
        const calFooter = miniCalendar.find("#calTFooter");
        const eventTitle = miniCalendar.find("#eventTitle");
        const eventsLink = miniCalendar.find("#calLink");

        const today = new Date();
        let curMonth = today.getMonth();
        let curYear = today.getFullYear();

        eventTitle.text("No events today.");
        eventsLink.text("ALL EVENTS");
        eventsLink.attr("href", settings.calendar_link);

        if (settings.from_monday)
            thead.html(weekDaysFromMonday);
        else
            thead.html(weekDaysFromSunday);

        if (!settings.calendar_link.length && !settings.events.length)
            calFooter.css("display", "none");

        miniCalendar.find(".month-mover").each(function() {
            const mover = $(this);
            mover.on("click", function(e) {
                e.preventDefault();
                if (mover.hasClass("next"))
                    viewNextMonth();
                else
                    viewPrevMonth();
            });
        });

        miniCalendar.on("click touchstart", ".a-date", function(e) {
            e.preventDefault();
            $(".a-date").removeClass('focused');
            if (!$(this).hasClass('blurred')) {
                showEvent($(this).data('event'));
                $(this).focus();
                $(this).addClass('focused');
            }
        });

        function populateCalendar(month, year, onInit) {
            tbody.html("");
            calTitle.text(shortMonths[month] + " " + year);
            eventTitle.text("Click day to see event");
            eventsLink.text("All Events");
            eventsLink.attr("href", "#");


            curMonth = month;
            curYear = year;

            const ldate = new Date(year, month);
            let dt = new Date(ldate);
            let weekDay = dt.getDay();

            if (settings.from_monday)
                weekDay = dt.getDay() > 0 ? dt.getDay() - 1 : 6;

            if (ldate.getDate() === 1)
                tbody.append(lastDaysOfPrevMonth(weekDay));

            while (ldate.getMonth() === month) {
                dt = new Date(ldate);

                const isToday = areSameDate(ldate, new Date());
                let event = null;
                const eventIndex = settings.events.findIndex(function(ev) {
                    return areSameDate(dt, new Date(ev.date));
                });

                if (eventIndex != -1) {
                    event = settings.events[eventIndex];

                    if (onInit && isToday)
                        showEvent(event);
                }

                tbody.append(dateTpl(false, ldate.getDate(), isToday, event, onInit && isToday));

                ldate.setDate(ldate.getDate() + 1);

                const bufferDays = 43 - miniCalendar.find(".a-date").length;

                if (ldate.getMonth() != month) {
                    for (let i = 1; i < bufferDays; i++) {
                        tbody.append(dateTpl(true, i));
                    }
                }
            }

            if (settings.onMonthChanged) {
                settings.onMonthChanged(month, year);
            }
        }

        function lastDaysOfPrevMonth(day) {
			let monthIdx, yearIdx;
            if (curMonth > 0) {
                monthIdx = curMonth - 1;
                yearIdx = curYear;
            } else {
                if (curMonth < 11) {
                    monthIdx = 0;
                    yearIdx = curYear + 1;
                } else {
                    monthIdx = 11;
                    yearIdx = curYear - 1;
                }
            }

            const prevMonth = getMonthDays(monthIdx, yearIdx);
            let lastDays = "";
            for (let i = day; i > 0; i--)
                lastDays += dateTpl(true, prevMonth[prevMonth.length - i]);

            return lastDays;
        }

        function dateTpl(blurred, date, isToday, event, isSelected) {
            let tpl = "<div class='a-date blurred pointer-events-none'><span>" + date + "</span></div>";

            if (!blurred) {
                const hasEvent = event && event !== null;
                let cls = isToday ? "current " : "";
                cls += hasEvent && isSelected ? "focused " : "";
                cls += hasEvent ? "event " : "";

                tpl = "<button type='button' class='a-date " + cls + "' data-event='" + JSON.stringify(event) + "'><span>" + date + "</span></button>";
            }

            return tpl;
        }

        function showEvent(event) {
            if (event && event !== null && event !== undefined) {
                eventTitle.text(event.title);
                eventsLink.text("VIEW EVENT");
                eventsLink.attr("href", event.link);
            } else {
                eventTitle.text("No events on this day.");
                eventsLink.text("ALL EVENTS");
                eventsLink.attr("href", settings.calendar_link);
            }
        }

        function viewNextMonth() {
            const nextMonth = curMonth < 11 ? curMonth + 1 : 0;
            const nextYear = curMonth < 11 ? curYear : curYear + 1;

            populateCalendar(nextMonth, nextYear);
        }

        function viewPrevMonth() {
            const prevMonth = curMonth > 0 ? curMonth - 1 : 11;
            const prevYear = curMonth > 0 ? curYear : curYear - 1;

            populateCalendar(prevMonth, prevYear);
        }

        function areSameDate(d1, d2) {
            return d1.getFullYear() == d2.getFullYear() &&
                d1.getMonth() == d2.getMonth() &&
                d1.getDate() == d2.getDate();
        }

        function getMonthDays(month, year) {
            const date = new Date(year, month, 1);
            const days = [];
            while (date.getMonth() === month) {
                days.push(date.getDate());
                date.setDate(date.getDate() + 1);
            }
            return days;
        }

        populateCalendar(curMonth, curYear, true);

        return miniCalendar;
    };

}(jQuery));